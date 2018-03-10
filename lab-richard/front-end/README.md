<h1> 36-asychronous-actions</h1>

author: Richard Montgomery

repo: https://github.com.montgomeryrd/36-asynchronous-actions

version: 1.0.0

<hr>

<h2> How to Use:</h2>

"npm i" dependencies from front and back end.

<strong>Backend: Start DBs and Server</strong>

Terminal I: mongo

Terminal II: npm run start

<strong>Frontend: Build Web Pack</strong>

Terminal III: npm run watch

<strong>Browser:</strong>

 localhost:8080

 <hr>

<h2> How it's supposed to work </h2>

Enter in an Album title. It should render a new section with inputs for tracks, but I can't get that far so... I stopped. Had I more time, and more importantly a better grasp of JavaScript and React, the app would then allow a user to create, update, and delete albums as well as the track properties on the albums.

<hr>

<h2>Lab Assignment</h2>
![cf](http://i.imgur.com/7v5ASc8.png) 36: Async Actions
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas

## Requirements
#### Configuration

##### back-end/
* copy your lab-14 or comparable api into into a back-end directory

##### frontend/
* **README.md** -- with documentation about your lab
* **.babelrc** -- with all dependencies and dev-dependencies
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust .gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.lock** -- with the npm lockfile
* **package.json** -- with all dependencies and dev-dependencies
* **webpack.config.js** -- with webpack config
* **src/** -- containing the frontend code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset
* **src/style/_base.scss** -- base styles
* **src/style/_layout.scss** -- layout styles

#### Feature Tasks
  * Create a frontend for your lab-14-two-resource-api or week 5 project
  * You can also choose to use a comparable RESTful api that does not have auth (must permit full CRUD)
  * Use react/redux best practices
  * Add validation in your redux routers
  * Add reporter and thunk middleware to your redux store
  * make async action creators for making ajax request to your back-end
  * make sync action creators from updating your app store

#### Test
  * Test your redux reducers
  * Test your util methods

#### Documentation
Write a description of the project in your README.md


