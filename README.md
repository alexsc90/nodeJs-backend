# Node.JS backend 
In this repo you will find the project developed during the Backend with Node.js course by [Platzi](https://platzi.com/clases/backend-nodejs/). You can also find my personal practice during the course in the ***learning-node*** folder, the excercises here are my response to the practice proposed in the course.

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Extras](#extras)

## General info

The goal of the course was to build an API movies service using Node.js and Express.js. Such a service can be found in the ***movies-api*** folder in this repository. For the deployment to production I've used [Vercel](https://vercel.com/docs). If you want to see my api deployed you'll need to access to https://node-backend-beta.vercel.app/api/movies.

## Technologies

* [Node.js](https://nodejs.org/es/docs/)
* [Express.js](https://expressjs.com/es/4x/api.html)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/)


## Setup

After forking and cloning this repo, you'll need to run the commands
```
cd movies-api
npm run install
```

to install all dependencies. Make sure you're placed in movies-api directory.

Before you can start trying out the application, you need to establish your own environment variables in a *.env* file, which is placed in the *.gitignore* file. 

```
const config = {
      dbUser: process.env.DB_USER,
      dbPassword: process.env.DB_PASS,
      dbHost: process.env.DB_HOST,
      dbName: process.env.DB_NAME,
}
```

As an example, you can find the settings for this in the *config.js* file in the root of the project. You'll need to signup for a free [MongoDb Atlas](https://www.mongodb.com/es/cloud/atlas) account and crete a cluster if you want to see how my API service is working.

## Usage 

```
"scripts": {
    "dev": "nodemon index",
    "start": "set NODE_ENV=production && node index",
    "test": "mocha --exit"
  }

```
In the *package.json* of the movies-api directory you can find a series of scripts, which you can run with the command:

`npm run [script to run]`

If you want to see how it looks on your browser, you can run the command `npm run dev`. To be able to check all the functionality of the API, you'll need to use an API testing tool. In this case, I've used [Postman](https://www.postman.com/). **DON'T** forget to inject your own data, so you can see how it's working. 
You can take the data from the *movies.js* file in the **mocks** folder. 

## Extras

* [Mocha](https://mochajs.org/)
  
  I've used this testing framework to check that the routes and services of my application are working. If you want to run the tests, you need to run the command `npm t` 

  Have fun! ;) 

