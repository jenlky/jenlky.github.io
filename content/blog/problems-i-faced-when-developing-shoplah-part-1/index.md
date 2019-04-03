---
title: Problems I faced when developing ShopLah (Part 1)
date: "2019-04-02T20:30:00.121Z"
tags: ["developing", "React", "Redux"]
---

ShopLah is a shopping cart site [hosted on heroku](https://jenlky-shopping-cart.herokuapp.com/), created with the following libraries:

> **Client:** React, React Router, Redux (redux-thunk, redux-logger, redux-persist), Material-UI
> 
> **Server:** Node.js, Express, ejs for templating, dotenv, CORS
> 
> **Authentication:** Passport.js, passport-auth0 and express-session
> 
> **Testing:** Mocha and Chai

To read why I chose the following libraries, check out this [post](/reasons-for-choosing-shoplah-libraries/).


###Cart controller logic###
> Redux action creators flow chart:
>
> AddToCart (product doesn't exist or qty === 0) -> cart controller -> UpdateStore -> CalculatePrice
>
> RemoveFromCart (product exists or qty >= 1) -> cart controller -> UpdateStore -> CalculatePrice
>
> UpdateCart (product already exists or qty >= 1) -> cart controller -> UpdateStore -> CalculatePrice

RemoveFromCart splice product from array, while UpdateCart changes the quantity of product.

My initial thought was that the cart logic should not be duplicated in both cart controller and productsReducer, since I am doing the same thing at two different places - one at database, and one at Redux store. What I did was use the returned response from cart controller to modify my Redux store. However, there is a noticeable ~1000ms delay every time I add, remove or update product's quantity. 

The reason was because http requests took time and the UX changes were not immediate. I re-wrote it so my action creators would dispatch actions first, before making http requests.


###React-router doesn't work after connecting to Redux###
This is a known issue in react-redux, you can read more about it [here](https://github.com/reduxjs/react-redux/issues/507)
or [here](https://github.com/reduxjs/react-redux/blob/master/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux).
*NavLink* didn't work because `react-redux` connect method implements *shouldComponentUpdate* which will cause component not to render when props didn't change. And this is conflicting with `react-router 4`. 

It seems they are going to [remove shouldComponentUpdate](https://github.com/reactjs/react-redux/pull/625) in `react-redux version 5.1`. 
There are at least 3 ways to get it working:

  1. Currently, as a workaround, I pass a prop coming from `Router` like `this.props.match.params` to connected child component even though I don't use it in inside. But it will make rerendering the component each time when routes change.

  2. To avoid it you can pass *{pure: false} to connect* as described in [react-redux troubleshooting section](https://github.com/reduxjs/react-redux/blob/master/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux). I tried this but it's too laggy.

  3. Another way is to use withRouter Higher OrderHOC or pass location prop as described in [Dealing with Update Blocking](https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking). Eventually I opted for this method since it's the simplest. 
  However, that didn't work too until I added `<Router history={history}> to App.js before Switch` and it works!


###React spinner###
React spinner only works when the user is not logged in, and he/she tries to access restricted routes like `/cart` or `/user/profile`. 

The loading page did not show the react spinner which was weird because `if (this.state.loading) return null` works. But I guess `React` updated the state too fast so it didn't work. 

Adding a setTimeout to `this.setState({ loading: false })` enabled React spinner to run on all routes!

```
// delay setState of loading so there's time for spinner to run 
constructor(props) {
    super(props);
    this.state = { loading: true };
}

componentDidMount() {
    setTimeout(() => {
        this.setState({ loading: false })
    }, 100); // the number of milliseconds affect when setState kicks in
}
```


###Redux-persist###
I used this library because my app loses all its store data on refresh. Redux store does not persist data upon refresh. 

For example, if an user logs in successfully and navigates to another page - he'd lose all his shopping cart items and all his login details from `Redux store`. 

What `redux-persist` does is it prevents the user from losing all these data when he refreshes the page. It saves `Redux store` data to localStorage, and rehydrates `Redux store` when the user refreshes. 

For example, there was [a bug](https://stackoverflow.com/questions/55412223/react-redux-typeerror-invalid-attempt-to-spread-non-iterable-instance) where I erroneously returned `productsReducer: {showPopup: true}` without the other values. My persist/REHYDRATE kept rehydrating my productsReducer with that one key.

Thus when productsReducer ran `let updatedId = [...state.id]` there was an error, because there was no id key in the object.

```
const initialState = {
  products: [],
  id: [],
  qty: [],
  numOfItems: 0,
  totalPrice: 0,
  status: '',
  showPopup: false
};

const productsReducer = (state = initialState, action) => {
  let updatedId = [...state.id]; // there was an error on this line
  let updatedQty = [...state.qty];
    ....
}
```

But the problem is when the user isn't logged in, the products he added to cart shouldn't persist. He should not be able to see the added shopping cart items.

To solve this I tried to `blacklist: ['productsReducer']`, however the problem is blacklist can't tell when the user isLoggedIn or not. I want to conditionally persist some information, so my options were:

- pause before persist and rehydrate action. But I couldn't get `pauseStore: () => dispatch({ type: PAUSE })` to work...

- remove all products from productsReducer if user is not logged in.
Although this means that an extra action has to be dispatched for non-logged in users, I chose this method because it was the most straightforward one that worked.

- create a permanent and a temporary reducer - blacklist the temporary one. Too complicated.


###I used Auslogics Disk Defrag defrag and optimise###
On hindsight, I shouldn't do that because it messed with my environment variables path and node\*_modules. I knew my node\*_modules were faulty because it showed the error -
**'nodemon' is not recognized as an internal or external command, operable program or batch file.**

To fix the former, type the following:

```
npm config get prefix
C:\Users\Jen\AppData\Roaming\npm // that's the path on my pc
```

Go to My Computer (for Windows 7) or This PC (for Windows 10), right click -> properties -> advanced system settings. 

Under Advanced tab, click on Environment Variables and under user variables for *user* - click edit path variable and check if the path above is inside. If it is not, add it in and restart your computer.

To fix the latter, I had to remove and re-install all the packages...