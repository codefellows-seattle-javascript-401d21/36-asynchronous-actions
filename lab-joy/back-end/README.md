# Lab 14 - MongoDB Back End
Joy Hou, 2018

## Description
This is the back-end for a notes application that is persisted in MongoDB with an authors schema and a notes schema.

## .env
PORT=3000
NODE_ENV="debug"
MONGODB_URI=mongodb://localhost:27017/notes

## How To Use
* Git clone the repository. 
* Navigate to the back-end folder in your terminals
* In one terminal window, use "sudo mongod" to start your mongo database
* In a separate terminal window, use "mongo" to connect to the database
* In yet another terminal window, use "npm start" to start your server
* The back end is now functional.