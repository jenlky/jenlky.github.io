---
title: Problems I faced when deploying ShopLah (Part 2)
date: "2019-04-03T11:30:32.169Z"
tags: ["deployment", "Heroku"]
---
<!-- description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter. -->
 
1. In order to deploy to Heroku, I first had to download Heroku Command Line Interface (CLI). 

Since I already had an [existing Heroku app](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote), I typed the following:

```
heroku git:remote -a jenlky-shopping-cart
// set git remote heroku to https://git.heroku.com/jenlky-shopping-cart.git
```
Next I typed `git login`, it opened a tab and asked me to login. 
After logging in, I typed `git remote --v` which returned the following:

```
heroku  https://git.heroku.com/jenlky-shopping-cart.git (fetch)
heroku  https://git.heroku.com/jenlky-shopping-cart.git (push)
origin  https://github.com/helplah/shopping-cart.git (fetch)
origin  https://github.com/helplah/shopping-cart.git (push)

git push heroku master //push to heroku repo master branch
git push origin master //push to github repo master branch
```

So basically git add and git commit happen locally, while git remotes are versions of your repository that live on other servers. 

You deploy your app by pushing its code to a special Heroku-hosted remote that’s associated with your app.

Lastly, I typed `git push heroku master` to push it to Heroku server.


2. Localhost is used in development stage. But in Heroku, you cannot use localhost to refer to yourself. I had to conditionally use `windows.location.href` or `href links` depending on whether I'm in development in production. 

```
if (process.env.NODE_ENV === 'development') {
window.location.href = 'http://localhost:8080/auth/login';
} else {
window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
}
```

For example, `/auth/login` or `https://jenlky-shopping-cart.herokuapp.com/cart` were used like above.

My corsOption origin was also changed to `https://jenlky-shopping-cart.herokuapp.com/` too, instead of `http://localhost:3000`. 
