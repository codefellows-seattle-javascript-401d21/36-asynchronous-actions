# LAB 36: Budget Tracker Continued

## Configureation
Create a `.env` file in the `back-end` file and configure it with the following enviroment variables 
```
PORT = 3000
NODE_ENV = "test"
MONGODB_URI = mongodb://localhost/cat
```

Create a `.dev.env` file in the `front-end` file and configure it with the following enviroment variables 
```
NODE_ENV="dev"
API_URL="http://localhost:3000"
CDN_URL="/"
```

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and after that, you will neex to install all the dependencies. do this by typing in `npm i`. 

next you need to have these scripts adjusted in your package.json file.

### scripts for the front-end
```javascript
"scripts": {
    "test": "jest --verbose",
    "test:watch": "jest --watchAll",
    "build": "webpack",
    "watch": "webpack-dev-server --inline --hot"
  },
  ```

### scripts for the back-end
```javascript
"scripts": {
    "start": "node index.js",
    "start:watch": "nodemon index.js",
    "start:debug": "DEBUG=http* nodemon index.js",
    "test": "jest -i",
    "test:watch": "jest -i --watchAll",
    "test:debug": "DEBUG=http* jest -i",
    "lint": "eslint .",
    "lint:test": "npm run lint && npm test",
    "start-db": "mkdir -p ./data/db && mongod --dbpath ./data/db",
    "stop-db": "killall mongod"
  },
```

from there, you can go to your terminal and on 3 different tabs type, 

```javascript
npm run start-db
```
```javascript
npm run watch
```
```javascript
nodemon index.js
```
once you have done that. you can go to your localhost:8080 and see your project in the browser.

---
## How to use

you can enter a name of a owner, after that you will you have a new section open up with 3 more inputs for the cat. you can enter in a `name`, `age` and `color`. you can add as many cats as you want to your OWNER. you can delete what ever you want, either a owner and that gits rid of all the cats with that owner or just a single cat.

--- 

### Updating data
double clicking on the grey box of the category or the dark grey of the expense will open up that item so you can update the item.
--- 

### delete button
Just hit the delete button on either of the category or the expense it will remove that item from storage.

## test...

we have done testing for the 

* category-action file
* category-form file
* category-reducer file
* expense-action file
* expense-form file
* dashboard file




