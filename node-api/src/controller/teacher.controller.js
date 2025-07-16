const { escape } = require('mysql2');
const db = require('../config/db')
const { logError, isEmptyOrNull } = require('../config/service')

const getList = async (req, res) => {

    try {
        //query from db
        const [teacher] = await db.query("SELECT * FROM teacher");

        res.json({
            teacher: teacher,

        });
    } catch (e) {
        logError("teacher.list", e, res);
    }
}

//get teacher detail
const getDetail = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [teacher] = await db.query("SELECT * FROM teacher WHERE id = :id", param); //more secure
        res.json({
            teacher: teacher[0] || null,
        });
    } catch (e) {
        logError("teacher.detail", e, res);
    }
}

//create a teacher
const create = async (req, res) => {
    
    try {
        var {
            first_name,
            last_name,
            gender,
            dob,
            tel,
            image,
            email,
            current_address,
            note,
            is_active,
        } = req.body;

        //validation
        var error = {};
        if (isEmptyOrNull(first_name)) {
            error.first_name = 'First Name is required!';
        }
        if (isEmptyOrNull(last_name)) {
            error.last_name = 'Last Name is required!';
        }
        if (isEmptyOrNull(tel)) {
            error.tel = 'Telephone is required!';
        }
        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
        }

        //param
        var param = {
            first_name,
            last_name,
            gender,
            dob,
            tel,
            image,
            email,
            current_address,
            note,
            is_active,
            created_by: req.username
        };

        //check existing
        const [findTeacher] = await db.query("SELECT * FROM teacher WHERE (tel = :tel OR email = :email)", param);
        if (findTeacher.length > 0) {
            res.status(403).json({
                message: "Telephone or Email already exist! Please try others!",
            });
        } else {
            const [teacher] = await db.query(`INSERT INTO teacher 
            (
                first_name, 
                last_name, 
                gender, 
                dob, 
                tel, 
                image, 
                email, 
                current_address, 
                note, 
                is_active, 
                created_by
            )
            VALUES
            (
                :first_name, 
                :last_name, 
                :gender, 
                :dob, 
                :tel, 
                :image, 
                :email, 
                :current_address, 
                :note, 
                :is_active, 
                :created_by
            )`, param);
            res.json({
                message: 'Create Teacher Successfully!',
                teacher: teacher,
            });
        }
        
    } catch (e) {
        logError("teacher.create", e, res);
    }
}

//update a teacher
const update = async (req, res) => {
    try {
        var {
            first_name,
            last_name,
            gender,
            dob,
            tel,
            image,
            email,
            current_address,
            note,
            is_active,
        } = req.body;
        var id = req.params.id;

        //validation
        var error = {};
        if (isEmptyOrNull(id)) {
            error.id = 'Id is required!';
        }
        if (isEmptyOrNull(first_name)) {
            error.first_name = 'First Name is required!';
        }
        if (isEmptyOrNull(last_name)) {
            error.last_name = 'Last Name is required!';
        }
        if (isEmptyOrNull(tel)) {
            error.tel = 'Telephone is required!';
        }
        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
        }

        //param
        var param = {
            first_name,
            last_name,
            gender,
            dob,
            tel,
            image,
            email,
            current_address,
            note,
            is_active,
            id,
        };
        //check existing id, email and phone
        const [findTeacher] = await db.query("SELECT * FROM teacher WHERE (tel = :tel OR email = :email) AND id != :id", param);
        if (findTeacher.length > 0) {
            res.status(403).json({
                message: "Telephone or Email already exist! Please try others!",
            });
        } else {
            const [teacher] = await db.query(`UPDATE teacher SET
                first_name=:first_name, 
                last_name=:last_name, 
                gender=:gender, 
                dob=:dob, 
                tel=:tel, 
                image=:image, 
                email=:email, 
                current_address=:current_address, 
                note=:note, 
                is_active=:is_active
                WHERE id=:id
            `, param);
            res.json({
                message: 'Update Teacher Successfully!',
                teacher: teacher,
            });
        }  
    } catch (e) {
        logError("teacher.update", e, res);
    }
}

//delete a teacher
const remove = async (req, res) => {
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
        logError("teacher.remove", e, res);
    }
}

module.exports = {
    getList,
    create,
    update,
    remove,
    getDetail
};
