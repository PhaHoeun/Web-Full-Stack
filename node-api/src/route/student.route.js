const { getListStudent, createStudent, deleteStudent, updateStudent } = require("../controller/student.controller");


const student = (app) => {
    app.get("/api/student/getList", getListStudent);
    app.get("/api/student/create", createStudent);
    app.get("/api/student/update", updateStudent);
    app.get("/api/student/delete", deleteStudent);
}

module.exports = {
    student
}