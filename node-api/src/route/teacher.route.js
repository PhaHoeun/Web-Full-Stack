//import the controller
const { getListTeacher, updateTeacher, createTeacher, deleteTeacher, getTeacherDetail } = require("../controller/teacher.controller")

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
    app.get("/api/teacher", getListTeacher )
    app.get("/api/teacher/:id", getTeacherDetail)
    //or multiple param
    // app.get("/api/teacher/:id/:name", getTeacherDetail)
    app.post("/api/teacher", createTeacher )
    app.put("/api/teacher/:id", updateTeacher )
    app.delete("/api/teacher/:id", deleteTeacher )
    //--------after using controller-----------
}


//export the function
module.exports = {
    teacher,
}