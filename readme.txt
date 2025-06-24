node -v : check node version
- Create mmainnn folder "full-stack"
init node
    - create folder "node-api"
    - create a file 'index.js' in node-api
    - add console.log('Hello') in index.js
    - run node
        > node node-api/index.js

init react.js
    - npx create-react-app web_react
    - cd web_react
    - npm start
    open browser https://localhost:3000

* Note: 
    > clear //clear console in terminal
    > cd folder //go to target location folder
    > cd .. //back folder

node.js plugin express.js
    > cd node-api
    > npm init
        enter until finish
    > npm install express
        create node_modules, package.json, ...
    > create file index.js in  node-api
    //import express to node-api/index.js
    const express = require("express");
    const app = express();


    // create a route
    app.get("/", (req, res) => { //http://localhost:8081/
    res.send("Hello express in node.js!");
    }); 

    app.get("/api/list_student", (req, res) => { //http://localhost:8081/api
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