//import express
const express = require("express");
const app = express();

//use request by body 
app.use(express.json()) //for parsing applicatoin/json
app.use(express.urlencoded({ extended: true })) //for parsing application/x-www-form-urlencoded

//import  teacher route
const { teacher } = require("./src/route/teacher.route");
const { student } = require("./src/route/student.route");
const { category } = require("./src/route/category.route");
const { role } = require("./src/route/role.route");


//call teacher, student route
teacher(app); //app is from line 3
student(app); //app is from line 3
category(app); //app is from line 3
role(app); //app is from line 3


//run server
app.listen(8081, () => {
    console.log('Server running on http://localhost:8081');
});


//run file 
// >node index.js