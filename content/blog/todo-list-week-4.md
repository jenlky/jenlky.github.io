---
title: Todo List Week 4 (10 - 14 June 2019)
date: "2019-06-17"
---

[Link](https://jumpstart-todo-list.netlify.com/)

This is about the Todo List website/app that I created during Week 4 of JumpStart. The whole week is dedicated for us to build a front-end project using what we learnt previously - the only criteria is it must be in React.

As the weeks went by I realise that my notes from our classes were overwhelming. I was using Google Sheets to take notes because I needed a quick and dirty way to store as much information as possible. However, that didn't afford me a quick overview of each topics.

<!-- ![My Google Sheets](./salty_egg.jpg) -->

My primary motivation for building this app was to solve this. To create a list of topics and questions to help my revision and learning. It has the following features:

1. Able to created nested lists
2. Add, edit and remove those lists

I had a few problems, namely:

1. How should I design my items state? What should I use? An array of objects or object of objects to represent my nested items?
2. What should I use for the id of each item object? That which I will use as React keys too.

I settled with an array of objects because at first I wanted to build a nested todo list whose items are capable of being reordered by drag and drop. Unfortunately, I
