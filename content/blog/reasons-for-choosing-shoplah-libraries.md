---
title: Reasons for choosing ShopLah libraries
date: "2019-04-03T15:00:00.169Z"
tags: ["library"]
---

ShopLah was created because I wanted to build a simple ecommerce website and familiarise myself more with authentication process and full-stack app flow. 

It was created with the following libraries:

> **Client:** React, React Router, Redux (redux-thunk, redux-logger, redux-persist), Material-UI
> 
> **Server:** Node.js, Express, ejs, Mongoose, dotenv, CORS
> 
> **Authentication:** Passport.js, passport-auth0 and express-session
> 
> **Testing:** Mocha and Chai

###React Router###
I used react-router because for `ReactDOM.render(<App />)`, class component App needed a way to render between a bunch of routes such as '/', '/cart', '/user/profile'. I didn't know how to use server-side rendering for React.

React-router could provide that out of the box. Whereas link or anchor tag doesn't work because I'm choosing to render a specific component/container if the route tallies. 

Further explanation: [Server-side vs Client-side](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)

###Redux###
I chose Redux because I have never used it before and I wanted to play around with it. I like the idea of getting back the same output for the same input very much - it's like Mathematics. 

However, the setup is a little verbose since you have to change/write code in a few places to make changes (like creating containers to mapStateToProps and mapDispatchToProps as compared to in React). The upside is whenever there's a bug, it's a lot easier to track it down. 

####Redux Thunk####
In Redux, reducer must be pure - it can't have any side effects - and action can only be an object. However, redux-thunk allows user to dispatch an action creator that returns a function instead of an action object. This function doesn't need to be pure; it is allowed to have side effects, including executing asynchronous API calls. 

####Redux Persist####
Redux-persist was used to persist data upon refresh. For example, the user is logged in and adds products to cart. The products should remain in Redux store when the user refreshes.

###dotenv###
> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

It allows user to store passwords, API keys and sensitive information in a file called `.env`. The file is usually added to `.gitignore` along with `node_modules` to prevent it from being added to git.

###CORS###
> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

[Introduction](https://www.html5rocks.com/en/tutorials/cors/)

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

**What is CORS?**

CORS stands for Cross-Origin Resource Sharing. It is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at different origin.

**Why is it needed?**

For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.

The use-case for CORS is simple. Imagine the site alice.com has some data that the site bob.com wants to access. This type of request traditionally wouldn’t be allowed under the browser’s same origin policy. However, by supporting CORS requests, alice.com can add a few special response headers that allows bob.com to access the data.

<!--
**Why did I have to use it for my webapp?**
-->

###Passport###
####passport-auth0####
I chose passport-auth0 strategy because I was learning about authentication and Mongoose and was looking for a no-frills authentication method. Therefore, I chose a third-party authentication provider like Auth0. 

####express-session####
> The Auth0 Passport strategy enforces use of state parameter in OAuth 2.0 authorization requests and requires session support in Express to be enabled.

Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

I needed express-session to store session ID, so that cookie session ID can be compared with server session ID. If it tallies, the user will be given access to that particular account.
