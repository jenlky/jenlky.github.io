---
title: Problems I faced when deploying ShopLah (Part 2)
date: "2019-04-02T22:40:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

###Deployment problems###
1. Localhost is used in development stage. But in Heroku, you cannot use localhost to refer to yourself. I had to conditionally use different windows.location.href and href links depending on whether I'm in development in production. /auth/login OR https://jenlky-shopping-cart.herokuapp.com/cart were used, like below:

```
if (process.env.NODE_ENV === 'development') {
window.location.href = 'http://localhost:8080/auth/login';
} else {
window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
}
```

My corsOption origin was also changed to https://jenlky-shopping-cart.herokuapp.com/ too, instead of http://localhost:3000. 

2. Client-side routing was not working... Heroku is expecting server-side (static) routing when you visit a URL, so you must reconfigure the static routes to first load the "index.html" file (which is the `\` endpoint by default).

	- Set up a static.json: React Routing works in local machine but not Heroku
	- Explanation on Server-side vs Client-side
	- Reddit: React router urls not working in heroku?

You're kind of correct that it is a 'production problem' - but the truth is that Create React App's development mode hides the problem from you.

You have a single page application, meaning that you only actually have one html file (index.html) - the rest of your routes live inside the JavaScript that gets loaded into index.html. Which is why your button works - the JS is already loaded and it knows what to do.

When you type the url into a browser, the web server is looking for the /groups/welcome page - but you don't actually have that page. So you need to tell your web server if anyone is looking for this page serve index.html before you give up. In NGINX it is called 'try files'. In Heroku, it looks like you'll want to find a 'build pack' this one is recommended by the React Docs.

3. ???

Why did I use react-router? For ReactDOM.render(<App />), class component App needed a way to render between a bunch of routes such as '/', '/cart', '/user/profile'. React-router could provide that out of the box. Link or anchor tag doesn't work because I'm choosing to render a specific component/container if the route tallies. 

**I wonder why React package.json proxy works in actions like FetchProducts and FetchUser**