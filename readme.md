node -v : check node version
- Create mmainnn folder "full-stack"
# init node
    - create folder "node-api"
    - create a file 'index.js' in node-api
    - add console.log('Hello') in index.js
    - run node
        > node node-api/index.js

# init react.js
  > npx create-react-app web_react
  > cd web_react
  > npm start
    open browser https://localhost:3000

# Note: 
    > clear //clear console in terminal
    > cd folder //go to target location folder
    > cd .. //back folder

# node.js plugin express.js
  > cd node-api
  > npm init
     enter until finish
  > npm install express
    create node_modules, package.json, ...
  > create file index.js in  node-api
    //import express to node-api/index.js
    const express = require("express");
    const app = express();


# create a route
    app.get("/", (req, res) => { //http://localhost:8081/
    res.send("Hello express in node.js!");
    }); 

    app.get("/api/list_student", (req, res) => { (http://localhost:8081/api)
    res.send({ message: "You have requested list of student!" });
    });

    app.get("/api/list_teacher", (req, res) => { //http://localhost:8081/api
    let user = {
        name: "John Doe",
        age: 30,
        subject: "Mathematics"
    };
    res.send(user);
    });

    app.listen(8081, () => { //http://localhost:8081/
    console.log("Server is running on port 8081");
    });
    
    //run file: >node index.js


# structure
    1. src folder
        a. controller
            - teacher.controller.js
        b. config
        c. route
            - teacher.route.js

    //import and export
    1. import   
        const {teacher} = require("./src/route/teacher.route");
    2. export
        module.exports = { teacher }
    3. call for using
        teacher(app);

# auto refresh after change fille (nodemon)
  > npm install --save-dev nodemon
    add "start": "nodemon index.js" to script block in package.json

# query
    const getListTeacher = async (req, res) => {

        //get parameter query
        let testQuery = req.query;
        const teachers = [
            { id: 1, name: "Pha", age: 35, subject: "Physics" },
            { id: 2, name: "Ra Smach", age: 40, subject: "Chemistry" }
        ];

        res.json({
            'teacher': [],
            'query': testQuery,
            //or
            'name': testQuery.name,
            //or
            'id': req.query.id,
        });
    }

# params
    //in controller
        const getTeacherDetail = (req, res) => {
            res.json({
                'param': req.params
            });
        }
    // in route
        app.get("/api/teacher/:id", getTeacherDetail )

# body 
    //add two lines in index.js for line 6&7 before use body
    const createTeacher = async (req, res) => {
        res.json({
            'body': req.body
        })
    }   //use with post method

# Node + MySQL
  > Install xampp
    - Start MySQL, Change MySQL port (3306 -> 6306 if can't start)
    - Start Apache
    - Open Browser
    - Type : http://localhost:80
    - click on: phpMyAdmin
  > Create Database
    - create database
    - create table
        - table role(Id, Name, Code)
    - SQL 
        - insert: 
            INSERT INTO role (Name, Code) VALUES ('Admin', 'admin');
            INSERT INTO role (Name, Code) VALUES ('Teacher', 'teacher');
            INSERT INTO role (Name, Code) VALUES ('Student', 'student');
            INSERT INTO role (Name, Code) VALUES ('Test01', 'test01');
        - select: 
            SELECT Name, Code FROM role;
        - delete: 
            DELETE FROM role WHERE id = 1;
        - update: 
            UPDATE role SET Name='Test02', Code='test02' WHERE Id=8;

# Integrate Node with MySQL
    //file conntion create file db.js in config // driver
  > npm install mysql2
    const mysql = require("mysql2/promise")
    const db = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'learn_node_db',
        port: 6306,
        namedPlaceholder: true,
    });

    module.exports = db;
  > in controller
    - list data from database
    - create new record to database
    - update/delete

# Check ERROR
  > Database
    - start server mysql
    - connection to database
  > sql
    - insert, update, delete, select correctly
  > try catch
    - add try and catch all function
  > console.log function in node.js
  > log error file
    - create function log error
        //create file config/service.js
            . npm install moment
  > validate required field
  > Status
    - 200: OK
    - 404: Route not found
    - 500: Internal server error

# CRUD Category
    - id Int (PK), name varchar(120), description text, status tynyint(1), create_at datetimestamp
    - creaate table,
    index.js -> route -> controller (getList, getDetail, create, update, remove)

# Incrypt password using bcrypt
    - npm install bcrypt
    -import: const bcript = require("bcrypt")
    - create using function: bcript.hashSync(front-end pwd, round)
    - log in using function: bcript.compareSync(front-end pwd, hasPwd from DB)

# delete key from response json
    - delete user[0].password; 

# jwt(json web token) access token
    - npm i jsonwebtoken
    - import: const jwt = require("jsonwebtoken")
    - create config file: const { Config } = require('../config/config')
    //generate jwt
    - var access_token = await jwt.sign({data: user[0]}, Config.ACCESS_TOKEN_KEY, {expiresIn: "60s"})
    - create function validate_token

# refresh token
    - create function: refresh_token
    - route: /api/user/refresh_token
    - call in postman

    