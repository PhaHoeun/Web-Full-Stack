const db = require('../config/db')
const { logError, isEmptyOrNull } = require('../config/service')

const getList = async (req, res) => {

    try {
        //query from db
        const [student] = await db.query("SELECT * FROM student");

        res.json({
            student: student,

        });
    } catch (e) {
        logError("student.list", e, res);
    }
}

//get student detail
const getDetail = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [student] = await db.query("SELECT * FROM student WHERE id = :id", param); //more secure
        res.json({
            student: student[0] || null,
        });
    } catch (e) {
        logError("student.detail", e, res);
    }
}

//create a student
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
        const [findStudent] = await db.query("SELECT * FROM student WHERE (tel = :tel OR email = :email)", param);
        if (findStudent.length > 0) {
            res.status(403).json({
                message: "Telephone or Email already exist! Please try others!",
            });
        } else {
            const [student] = await db.query(`INSERT INTO student 
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
                message: 'Create student Successfully!',
                student: student,
            });
        }

    } catch (e) {
        logError("student.create", e, res);
    }
}

//update a student
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
        const [findStudent] = await db.query("SELECT * FROM student WHERE (tel = :tel OR email = :email) AND id != :id", param);
        if (findStudent.length > 0) {
            res.status(403).json({
                message: "Telephone or Email already exist! Please try others!",
            });
        } else {
            const [student] = await db.query(`UPDATE student SET
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
                message: 'Update student Successfully!',
                student: student,
            });
        }
    } catch (e) {
        logError("student.update", e, res);
    }
}

//delete a student
const remove = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [student] = await db.query("DELETE FROM student WHERE id = :id", param); //more secure
        res.json({
            message: 'Delete student Successfully!',
            student: student,
        });
    } catch (e) {
        logError("student.remove", e, res);
    }
}

//student register
const studentRegister = async (req, res) => {
    try {
        var {
            class_room_id,
            student_id,
            discount,
            discount_price,
            total_to_pay,
            is_completed_paid,
            note,
        } = req.body;

        //validation
        var error = {};
        if (isEmptyOrNull(class_room_id)) {
            error.class_room_id = 'Class Room is required!';
        }
        if (isEmptyOrNull(student_id)) {
            error.student_id = 'Student is required!';
        }
        if (isEmptyOrNull(total_to_pay)) {
            error.total_to_pay = 'Total to pay is required!';
        }
        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
            return false;
        }

        var param = {
            class_room_id,
            student_id,
            discount,
            discount_price,
            total_to_pay,
            is_completed_paid,
            note,
            created_by: req.username,
        };
        const [register] = await db.query(`INSERT INTO student_register
        (
            class_room_id,
            student_id,
            discount,
            discount_price,
            total_to_pay,
            is_completed_paid,
            note,
            created_by
        )
        VALUES
        (
            :class_room_id,
            :student_id,
            :discount,
            :discount_price,
            :total_to_pay,
            :is_completed_paid,
            :note,
            :created_by
        )`, param);
        res.json({
            message: 'Student register successfully!',
            register: register,
        });
    } catch (e) {
        logError("student.register", e, res);
    }
}

//student payment
const studentPayment = async (req, res) => {
    try {
        var {
            id,
            class_room_id,
            student_id,
            Payment,
            payment_method,
            payment_date,
            note,
            image_ref,
            created_by,
            created_at
        } = req.body;
        //validation
        var error = {};
        if (isEmptyOrNull(id)) {
            error.id = 'Id is required!';
        }
        if (isEmptyOrNull(class_room_id)) {
            error.class_room_id = ' Class Room is required!';
        }
        if (isEmptyOrNull(student_id)) {
            error.student_id = 'Student is required!';
        }
        if (isEmptyOrNull(Payment)) {
            error.Payment = 'Payment is required!';
        }
        if (isEmptyOrNull(payment_method)) {
            error.payment_method = 'Payment method is required!';
        }
        if (isEmptyOrNull(payment_date)) {
            error.payment_date = 'Payment date is required!';
        }
        if (Object.keys(error).length > 0) {                                                        
            res.json({
                error: error,
            });
            return false;
        }
        var param = {
            id,
            class_room_id,
            student_id,
            Payment,
            payment_method,
            payment_date,
            note,
            image_ref,
            created_by: req.username,
            
        };
        const [payment] = await db.query(`INSERT INTO student_payment
        (
            id,
            class_room_id,
            student_id,
            Payment,
            payment_method,
            payment_date,
            note,
            image_ref, 
            created_by
        )
        VALUES
        (
            :id,
            :class_room_id,
            :student_id,
            :Payment,
            :payment_method,
            :payment_date,
            :note,
            :image_ref, 
            :created_by,
        )`, param);
        res.json({
            message: 'Student payment successfully!',
            payment: payment,
        });
    } catch (e) {
        logError("student.payment", e, res)
    }
}


module.exports = {
    getList,
    create,
    update,
    remove,
    getDetail,
    studentRegister,
    studentPayment
};
