FRONT END
```
NODE_ENV=dev
API_URL=http://localhost:3000
__DEBUG__=dev
```

BACK END
```
PORT=3000
MONGODB_URI=mongodb://localhost/album
```

This is an application that allows you to store Album and Track information. To run this application clone it on your machine and run 
```
npm install
```
on both your front-end and back-end repositories. 

In the front end run your webpack build with
```
npm run watch
```
In the back end run your server and your database
```
npm run start
npm run start-db
```

In the browser go to you localhost/8080 to interact with the app. 
To create a new album type the name in the field and hit submit.
You can then add tracks to that album in the following form.
Use the update and delete buttons to update/delete your tracks and albums. 