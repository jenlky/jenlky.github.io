---
title: JumpStart 4th Week Frontend Project (10 - 14 June 2019)
date: "2019-06-17"
---

[Todo List](https://jumpstart-todo-list.netlify.com/) was a front-end project I created during Week 4 of JumpStart. The whole week was dedicated for us to build something using what we learnt so far - the only criteria is it must be in React. We presented it on the following Monday morning.

### Use Case:

My notes from the classes were becoming overwhelming. I was using Google Sheets to take notes because I needed a quick and dirty way to store as much information as possible. It allowed me to use the cells as question and answer, kinda like flashcards. _But it didn't allow me a quick overview of each topic._

My primary motivation for building a Todo List was to solve this. To fulfill my requirements it must have:

#### Features (must be able to):

1. Create nested list where each child item is also able to have its own children
2. Add, edit and remove each list item

<!-- **Good to have:**
1. Drag and drop to allow user to reorder it -->

#### Repos involved:

- react-dnd-chessboard
- react-app-todo-list

#### Problems faced:

1. How should I design my items state? What should I use? An array of objects or object of objects to represent my nested items?
2. What about the id of each item object? It has to be unique because I will be using it as React keys too.
3. Using spread and rest operator to pass props down from parents to children

**1 -** I settled with an array of objects because at first I wanted to build a nested todo list whose items are capable of being reordered by drag and drop. However, due to lack of time I had to put it on hold in the interest of getting the bare minimum out first.

One way to reorder items is to change its index, or I could loop through and sort the object based on its keys. Changing the index seemed less expensive so I chose that.

**2 -** I thought of using `id: 1` for the parent item, `id: 1-1` for its child and `id: 1-1-2` for its grandchild. The idea is to keep concatenating `-number` to represent its children. But what if I implemented drag and drop? In that case, what's the point of using `-number` to denote its child relationship, when the user is allowed to drag a child item to its parent level? Thereby negating any benefits from using `-number` to represent the child relationship.

**3 -** I tried to use spread and rest operators to pass down props, but somehow there was an error.

**4 -** I didn't understand what was written for react-dnd-chessboard

#### Lessons learnt:

1. Deep cloning is only for... I don't need to do deep cloning. React keep tracks of object's outer references, it doesn't care about its inner references. Shallow cloning works for my case because it creates an array of objects with different outer reference and the same inner references. Any mutation happens in the shallow cloned object that has a different reference (or memory address), and not the state itself.

Thus, this is in compliant with React's principle of not mutating state directly. After that, all you need to do is trigger a re-rendering with `this.setState({ items: ...this.state.items })`.

2. Jesstern's feedback - "What if you move the cross from the component ToDoItemRight to ToDoItemLeft then would it still be called ToDoItemRight?" In short, I should name my component based on what it does rather than its positioning...

3. Function cannot be spreaded, only objects and arrays can be spreaded.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
