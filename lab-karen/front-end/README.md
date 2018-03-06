## Lab 32-combining-reducers

This project creates an app with React components and routing that incorporates front-end routing.  The app uses Redux state management.  The structure follows:

```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem] -- list of CategoryItems
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of ExpenseItems
              ExpenseForm -- for updating an expense
```

**App component**
The App component sets up the Provider for the redux store and the Router.

**Dashboard Component**
- displayed on the / route
- uses react-redux's ```connect``` to map state and dispatchable methods to props
- displays a ```CategoryForm``` for adding categories to the app state
- displays a ```CategoryItem``` for each category in the app state

**CategoryForm Component**
- expects an ```onComplete``` prop to be a function
  - the function is invoked with the CategoryForm state when the form is submitted
- expects a ```buttonText``` prop to configure the submit buttons text
- supports an optional ```category``` prop that will initialize the state of the form

**CategoryItem Component**
- displays the category's name and budget
- displays a ```delete``` button
  - ```onClick``` the category should be removed from the application state
- should display a CategoryForm
  - ```onComplete``` the form should update the component in the application state
- displays an ExpenseForm mapped to a category item that enables the user to create expenses on your app state
- display a list of all the ExpenseItems belonging to the category

**ExpenseForm Component**
- has an onComplete prop that will be invoked with the form state onSubmit
- supports an expense prop that will both set the initial form state, and update the state in the hook on componentWillReceiveProps()
- should have a buttonText prop that will configure the submit buttons text

**ExpenseItem Component**
- has a button that will delete the expense from the Apps onClick
- displays the name and price of the component
- displays an ExpenseForm that will enable the user to update the expense in the app state

### Installation & Set-Up
Fork this repository and install on your machine using git clone. Switch to the lab-karen folder.

This project requires Node JS and npm( Node package manager).

The following excerpt from the existing package.json file shows the required package dependencies. Install devDependencies with *npm i -D (package name)*.
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-plugin-transform-object-rest-spread": "^6.26.0",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "clean-webpack-plugin": "^0.1.18",
  "css-loader": "^0.28.10",
  "dotenv": "^5.0.0",
  "enzyme": "^3.3.0",
  "enzyme-adapter-react-16": "^1.1.1",
  "extract-text-webpack-plugin": "^3.0.2",
  "file-loader": "^1.1.9",
  "html-webpack-plugin": "^2.30.1",
  "jest": "^22.4.2",
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
}
```

Additionally, add the following scripts to your package.json file to run from the command line.
```
"scripts": {
  "test": "jest --verbose",
  "test:watch": "jest --watchAll",
  "build": "webpack",
  "watch": "webpack-dev-server --inline --hot"
```
### Running the app
From the command line, type *npm run watch* to start the Webpack server.  Open a tab in the browser at localhost:8080 to interact with the app.

### Tests
- Test ExpenseForm and CategoryForm
- Test all of your action creators
- Test each reducer used in your combineReducers
