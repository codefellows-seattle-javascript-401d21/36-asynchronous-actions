# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: 

    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"

_Last modified_: 2/28/2018

# App use

Launch a webpack build to create a live server and go to the main / route to view the dashboard.

Input a category and budget to get started on making a list of categories and budgets.

Input an expense and price to add them to the budget. (no math yet!)

# Lab Readme (SPECS)

![cf](http://i.imgur.com/7v5ASc8.png) 33: Budget Tracker Continued
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* Submit a pull request to this repository
* Submit a link to your pull request on canvas
* Submit a question, observation, and how long you spent on canvas

## Learning Objectives
* students will be able to create and implement custom middleware for redux

## Requirements
#### Configuration
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`

#### Feature Tasks
* complete all remaining lab-31 and 32 feature tasks
* add a reporter middleware to your application's redux store
* add validation to your redux reducers
* continue building your test coverage for compoenents, action creators and reducers (practice makes perfect!)