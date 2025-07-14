//import the controller
const { validate_token } = require('../config/service');
const { getList, update, create, remove, getDetail } = require("../controller/teacher.controller")

//register a teacher route
const teacher = (app) => { //arrow function

    app.get("/api/teacher", validate_token(), getList )
    app.get("/api/teacher/:id", validate_token(), getDetail)
    //or multiple param
    // app.get("/api/teacher/:id/:name", getTeacherDetail)
    app.post("/api/teacher", validate_token(), create )
    app.put("/api/teacher/:id", validate_token(), update )
    app.delete("/api/teacher/:id", validate_token(), remove )

}


//export the function
module.exports = {
    teacher,
}