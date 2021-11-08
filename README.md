
<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg" width="300"></a></p>



# Node TodoList api

a todo list that made with nodejs using knex query builder + mysql


## Installation


- clone project

```bash
  git clone https://github.com/abdulbasit-dev/node-todos-api.git
  cd node-todos-api
```
- install dependencies

```bash
  npm install
```
- create .env file and get contnet from .env.example

```bash
  touch .env
```
- set up database credentials inside knexFile.js

- run migartion and seed

```bash
  npx knex migrate:latest 
``` 

```bash
  npx knex seed:run 
``` 

- run server.js

```bash
  nodemon run dev
```

- you are good to go 😊 happy coding


    
