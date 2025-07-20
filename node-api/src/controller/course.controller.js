const { logError, isEmptyOrNull } = require('../config/service')
const db = require('../config/db')

const getList = async (req, res) => {
    try {
        const [course] = await db.query('SELECT * FROM course');
        res.json({
            course: course,
        });
    } catch (e) {
        logError('course.list', e, res);
    }
}

const getDetail = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        }
        const [course] = await db.query('SELECT * FROM course WHERE id = :id', param);
        res.json({
            course: course[0] ?? null,
        });
    } catch (e) {
        logError('course.detail', e, res);
    }
}

const create = async (req, res) => {
    try {
        var {
            category_id,
            name,
            description,
            image,
            total_hour,
            price,
            is_active,
        } = req.body;

        //---------validation------------
        var error = {};
        if (isEmptyOrNull(category_id)) {
            error.name = 'Category Id is required!';
        }
        if (isEmptyOrNull(name)) {
            error.name = 'Name is required!';
        }

        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
            return false;
        }
        //---------validation------------

        var param = {
            category_id,
            name,
            description,
            image,
            total_hour,
            price,
            is_active,
            created_by: req.username
        }
        const [course] = await db.query('INSERT INTO course (category_id, name, description, image, total_hour, price, is_active, created_by) VALUES(:category_id, :name, :description, :image, :total_hour, :price, :is_active, :created_by)', param);
        res.json({
            message: 'Create course Successfully!',
            course: course,
        });
    } catch (e) {
        logError('course.create', e, res);
    }
}

const update = async (req, res) => {
    try {
        var {
            category_id,
            name,
            description,
            image,
            total_hour,
            price,
            is_active,
        } = req.body;
        var id = req.params.id;

        //---------validation------------
        var error = {};
        if (isEmptyOrNull(id)) {
            error.name = 'Id is required!';
        }
        if (isEmptyOrNull(category_id)) {
            error.name = 'Category Id is required!';
        }
        if (isEmptyOrNull(name)) {
            error.name = 'Name is required!';
        }

        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
            return false;
        }
        //---------validation------------

        var param = {
            category_id,
            name,
            description,
            image,
            total_hour,
            price,
            is_active,
            id,
        }

        const [course] = await db.query('UPDATE course SET category_id=:category_id, name=:name, description=:description, image=:image, total_hour:=total_hour, price=:price, is_active:=is_active WHERE id = :id', param);
        res.json({
            message: 'Create course Successfully!',
            course: course,
        });
    } catch (e) {
        logError('course.update', e, res);
    }
}

const remove = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [course] = await db.query("DELETE FROM course WHERE id = :id", param); //more secure
        res.json({
            message: 'Delete course Successfully!',
            course: course,
        });
    } catch (e) {
        logError("course.remove ", e, res);
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
}

