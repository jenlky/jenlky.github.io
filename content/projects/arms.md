---
title: Apartments Residential Management System (ARMS)
date: "2019-08-02"
tags: ["Arms", "Legs", "Full stack"]
---

<!-- ![ShopLah front page](../assets/shoplah.webp "ShopLah front page") -->

Arms is the frontend, while Legs is the backend.

[ARMS](https://dashboard.heroku.com/apps/jumpstart-todo-list)

[Arms github](https://github.com/armadillo-apps/arms2)

[Legs github](https://github.com/armadillo-apps/legs)

###Problem###
ARMS help ThoughtWorks Singapore manage housing leases to foreign employees who travel to Singapore for projects.

Client was using spreadsheet until we built a centralised system to allocate occupants to apartments and vice versa. Client can now easily generate reports and track expenses.

###Solution###
Since we only had about 3 weeks to finish it, we had to focus on the necessary features for MVP. Our MVP allow the user to create apartments and occupants, and allocate occupants to apartments and vice versa.

####Stack####

- _Frontend:_ React, Proptypes
- _Backend:_ Express, Mongoose
- _Testing:_ Jest, Jest-MongoDB, React Testing Library, Cypress for automated end-to-end testing
- _DevOps:_ CircleCi, Heroku, Netlify
- _Misc:_ Axios, CORS, Moment, Faker for faking test data

####Accomplishments####

- Practised Test Driven Development (TDD) and followed Agile practices
- Pair programmed every day, and swapped pair frequently
- Trunk based development: everyone worked on master branch instead of creating feature branches
- Both frontend and backend deployed to Heroku
