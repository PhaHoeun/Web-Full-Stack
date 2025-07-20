const { validate_token } = require('../config/service');
const { getList, create, update, remove, getDetail } = require("../controller/course.controller");


const course = (app) => {
    app.get("/api/course", validate_token(), getList)
    app.get("/api/course/:id", validate_token(), getDetail)
    app.post("/api/course", validate_token(), create)
    app.put("/api/course/:id", validate_token(), update)
    app.delete("/api/course/:id", validate_token(), remove)
}

module.exports = {
    course
}