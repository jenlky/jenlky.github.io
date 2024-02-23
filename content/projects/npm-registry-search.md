---
title: Search NPM registry
date: "2023-11-30"
tags: ["npm registry"]
---

[Search NPM registry](https://search-npm-registry.vercel.app/)

[Github](https://github.com/jenlky/rws-react)

####Problem
- I want to build a search UI for [NPM registry](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md) and be able to search with text inputs.
- I want to list out the results of the search.
- I want to see details like name of the package, author and package updated date.
- I want to be able to route to a separate page so that the users can view details of the selected package.
- I want to build 

####Solution
- What if NPM registry sends back a million results? Pagination.
- Pagination would require some math for the api call to fetch results number 1-10 for page 1, 11-20 for page 2 and so on.
- Displays error message if no npm packages were found

####Stack

- Programming Languages: Typescript
- Frontend: NextJS(React), Material UI
- Testing: Cypress for automated end-to-end testing
- Misc: Axios
