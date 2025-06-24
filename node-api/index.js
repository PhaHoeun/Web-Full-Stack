//import express
const express = require("express");
const app = express();


// create a route
app.get("/", (req, res) => { //http://localhost:8081/
  res.send("Hello express in node.js!");
}); 

app.get("/api/list_student", (req, res) => { //http://localhost:8081/api/list_student
  res.send({ message: "You have requested list of student!" });
});

app.get("/api/list_teacher", (req, res) => { //http://localhost:8081/api/list_teacher
let user = {
    name: "John Doe",
    age: 30,
    subject: "Mathematics"
  };
  res.send(user);
});

app.listen(8081, () => { 
  console.log("Server is running on port 8081");
});

//run file 
// >node index.js