//import express
const express = require("express");
const app = express();

//import  teacher route
const { teacher } = require("./src/route/teacher.route");
const { student } = require("./src/route/student.route");


//call teacher, student route
teacher(app); //app is from line 3
student(app); //app is from line 3


//run server
app.listen(8081, () => {
    console.log('Server running on http://localhost:8081');
});


//run file 
// >node index.js