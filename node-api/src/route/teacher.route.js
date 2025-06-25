//import the controller
const { getListTeacher, updateTeacher, createTeacher, deleteTeacher } = require("../controller/teacher.controller")

//register a teacher route
const teacher = (app) => { //arrow function
    //-------befor using controller-----------
    // //create
    // app.get("/api/teacher/create", (req, res) => {
    //     let user = {
    //         name: "John Doe",
    //         age: 30,
    //         subject: "Mathematics"
    //     };
    //     res.send(user);
    // });

    // //read
    // app.get("/api/teacher/getList", (req, res) => {
    //     let teachers = [
    //         { name: "Alice Smith", age: 35, subject: "Physics" },
    //         { name: "Bob Johnson", age: 40, subject: "Chemistry" }
    //     ];
    //     res.send(teachers);
    // });

    // //update
    // app.get("/api/teacher/update", (req, res) => {

    //     res.send('update teacher');
    // });

    // //delete
    // app.get("/api/teacher/delete", (req, res) => {

    //     res.send('delete teacher');
    // });
    //-------befor using controller-----------

    //--------after using controller-----------
    app.get("/api/teacher/getList", getListTeacher )
    app.get("/api/teacher/create", createTeacher )
    app.get("/api/teacher/update", updateTeacher )
    app.get("/api/teacher/delete", deleteTeacher )
    //--------after using controller-----------
}


//export the function
module.exports = {
    teacher,
}