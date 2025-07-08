const { getListStudent, createStudent, deleteStudent, updateStudent } = require("../controller/student.controller");


const student = (app) => {
    app.get("/api/student", getListStudent);
    app.post("/api/student", createStudent);
    app.put("/api/student", updateStudent);
    app.delete("/api/student", deleteStudent);
}

module.exports = {
    student
}