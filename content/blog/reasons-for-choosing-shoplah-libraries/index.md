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

###Redux###
I chose Redux because I have never used it before and I wanted to play around with it. I like the idea of getting back the same output for the same input very much - it's like Mathematics. 

However, the setup is a little verbose since you have to change/write code in a few places to make changes (like creating containers to mapStateToProps and mapDispatchToProps as compared to in React). The upside is whenever there's a bug, it's a lot easier to track it down.

<!--I needed Redux-thunk...-->