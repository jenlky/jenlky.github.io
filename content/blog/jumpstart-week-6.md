---
title: JumpStart Week 6 (24 - 29 June 2019)
date: "2019-06-29"
---

Week 6 of JumpStart. Elson was teaching until Friday when Angeline taught MySQL.

#### Repos involved:

- [my-mongoose](https://github.com/jenlky/my-mongoose)
- [my-pokemon](https://github.com/jenlky/my-pokemon)
- [mongodb-password-encryption-lab](https://github.com/jenlky/mongob-password-encryption-lab)
- [login-with-cookie-or-jwt-lab](https://github.com/jenlky/login-with-cookie-or-with-jwt-lab)
- [books-api](https://github.com/jenlky/books-api) - Angeline was doing this with us

We learnt how to use Mongoose, an object modeling for MongoDB. We learnt that to create a Model you have to write a Schema first.

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

We played with a bunch of queries that can be found [here](https://mongoosejs.com/docs/queries.html). Next we did my-pokemon where we tried to create from scratch routes to database with tests on both the routes and queries. This was difficult.

Next Elson taught us queries
