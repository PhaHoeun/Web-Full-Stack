const { validate_token } = require('../config/service');
const { getListStudent, createStudent, deleteStudent, updateStudent } = require("../controller/student.controller");


const student = (app) => {
    app.get("/api/student", validate_token(), getListStudent);
    app.post("/api/student", validate_token(), createStudent);
    app.put("/api/student", validate_token(), updateStudent);
    app.delete("/api/student", validate_token(), deleteStudent);
}

module.exports = {
    student
}