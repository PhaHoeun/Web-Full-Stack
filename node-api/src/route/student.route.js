const { validate_token } = require('../config/service');
const { getList, create, update, remove, getDetail, studentRegister, studentPayment } = require("../controller/student.controller");


const student = (app) => {
    app.get("/api/student", validate_token(), getList)
    app.get("/api/student/:id", validate_token(), getDetail)
    app.post("/api/student", validate_token(), create)
    app.put("/api/student/:id", validate_token(), update)
    app.delete("/api/student/:id", validate_token(), remove)
    app.post("/api/student/register", studentRegister)
    app.post("/api/student/payment", studentPayment)
}

module.exports = {
    student
}