---
title: JumpStart 2nd Month (17 June - 12 July 2019)
date: "2019-07-12"
---

JumpStart Week 5 (17 - 21 June 2019)
This is week 5 of JumpStart. Elson is teaching.

Day 19 - Mon, 17 June 2019
(How web work)
Web 101

Day 20 - Tue, 18 June 2019
(Express)
my-express-app
express-playground
express-songs-api (lab 1 - 2)
express-pizza-app-with-tests

We learnt express and supertest.

Day 21 - Wed, 19 June 2019
(Express)
express-songs-api (lab 3 - 6)
kata-for-fun

Day 22 - Thur, 20 June 2019
(Express: middleware, using async function, serving static files; MongoDB)
Mongo Shell??

Day 23 - Fri, 21 June 2019
(MongoDB, Mongoose, testing by mocking DB)
jest-mongodb

JumpStart Week 6 (24 - 29 June 2019)
Week 6 of JumpStart. Elson was teaching until Friday when Angeline taught MySQL.

#### Repos involved:

- [my-mongoose](https://github.com/jenlky/my-mongoose)
- [my-pokemon](https://github.com/jenlky/my-pokemon)
- [mongodb-password-encryption-lab](https://github.com/jenlky/mongob-password-encryption-lab)
- [login-with-cookie-or-jwt-lab](https://github.com/jenlky/login-with-cookie-or-with-jwt-lab)
- [books-api](https://github.com/jenlky/books-api) - Angeline was doing this with us

We learnt how to use Mongoose, an object modeling for MongoDB. It is only capable of doing whatever the Mongo Shell does, however it makes using MongoDB so much easier. For example, in Mongo Shell you have to use $set operator to avoid overwriting certain fields. However, the default behaviour in Mongoose is to use $set operator.

We learnt that to create a Model you have to write a Schema first:

**todo.model.js**

```
const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
  name: { type: String, require: true },
  done: { type: Boolean, require: true }
});

mongoose.model("Todo", toDoSchema);
```

**todo.js**

```
const mongoose = require("mongoose");
require("./db");
require("./todo.model");

const TodoModel = mongoose.model("Todo");
```

We can think of Schema as a blueprint for Model, and Model as a class or an unintialised Document. To create a Document you create a new object and `.save()` it.

```
const myTodo = new TodoModel({ name: "" + Math.random(), done: true });
myTodo.save();
```

We played with a bunch of queries that can be found [here](https://mongoosejs.com/docs/queries.html). Next we did `my-pokemon` where we created routes from scratch to database with tests on both the routes and queries. That was difficult and took me a few hours.

Next we talked about symmetric encryption, asymmetric encryption and hashing.

we did `mongodb-password-encryption-lab` where we progressively went through different stages of encryption for Authorisation:

- `simpleSignUp, simpleLogin`
- `hashSignUp, hashLogin`
- `hashWithSecretSignUp, hashWithSecretLogin`
- `hashSaltSignUp, hashSaltLogin`

JumpStart Week 7 (1 - 5 July 2019)
Week 7 of JumpStart.

Monday, 1 July 2019
books-api
sequelize-association
sql-carmen-sandiego

Tuesday, 2 July 2019

Consider creating a backend project week
JumpStart Week 8 (8 - 12 July 2019)
