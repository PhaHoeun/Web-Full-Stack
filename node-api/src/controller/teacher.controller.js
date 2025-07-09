const db = require('../config/db')

const getListTeacher = async (req, res) => {

    try {
        //query from db
        const [teacher] = await db.query("SELECT * FROM teacher;");

        res.json({
            teacher: teacher,

        });
    } catch (e) {
        res.json({
            error: e,
        });
    }
}

//get teacher detail
const getTeacherDetail = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [teacher] = await db.query("SELECT * FROM teacher WHERE id = :id", param); //more secure
        res.json({
            teacher: teacher[0] || null,
        });
    } catch (e) {
        res.json({
            error: e,
        });
    }
}

//create a teacher
const createTeacher = async (req, res) => {
    try {
        var param = {
            name: req.body.name,
            subject: req.body.subject,
        };
        const [teacher] = await db.query("INSERT INTO teacher (name, subject) VALUES (:name, :subject)", param); //more secure
        res.json({
            message: 'Create Teacher Successfully!',
            teacher: teacher,
        });
    } catch (e) {
        res.json({
            error: e,
        });
    }
}

//update a teacher
const updateTeacher = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
            name: req.body.name,
            subject: req.body.subject,
        };
        const [teacher] = await db.query("UPDATE teacher SET name = :name, subject = :subject WHERE id = :id", param); //more secure
        res.json({
            message: 'Update Teacher Successfully!',
            teacher: teacher,
        });
    } catch (e) {
        res.json({
            error: e,
        });
    }
}

//delete a teacher
const deleteTeacher = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [teacher] = await db.query("DELETE FROM teacher WHERE id = :id", param); //more secure
        res.json({
            message: 'Delete Teacher Successfully!',
            teacher: teacher,
        });
    } catch (e) {
        res.json({
            error: e,
        });
    }
}

module.exports = {
    getListTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherDetail
};