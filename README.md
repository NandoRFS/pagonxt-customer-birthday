# pagonxt-customer-birthday

## Microservice to register customer's birthdays and return birthdays of the day considering the customer's timezone

The MS was developed in *Node.js*, *Typescript* and *express*, using concepts from *Clean Architecture*, unit and integration tests with *Jest* and a non relational database *MongoDB*.

> The projet is available in [Heroku](https://pagonxt-customer-birthday.herokuapp.com/pagonxt-customer-birthday/docs)

## Install and Run the Project

To install the project you need the *node >= 16.3.0*, *npm >= 7.15.1* and the *mongoDB*

After cloning the project, you need to config some environment variables, the necessary variables are in *.env.example* at the root path of project

Run `npm install` to install node dependencies

Run `npm run build` to make a build, this process generates a *dist* file with the code ready to run

Run `npm start` to start the application on a port defined in the PORT variable

Go to the */pagonxt-customer-birthday/docs* endpoint to see the documentation about routes

## Run Unit and Integration Tests

Before running any tests, set your test environment preferences, in the *jest-setup.js* file

Run `npm test:unit` to run unit tests             

Run `npm test:integration` to run integration tests, generating a *coverage* file


MIT Copyright (c) 2022 Fernando Rodrigues da Silva
