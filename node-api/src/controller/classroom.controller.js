const { logError, isEmptyOrNull } = require('../config/service')
const db = require('../config/db')

const getList = async (req, res) => {
    try {
        const [classroom] = await db.query('SELECT * FROM classroom');
        res.json({
            classroom: classroom,
        });
    } catch (e) {
        logError('classroom.list', e, res);
    }
}

const getDetail = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        }
        const [classroom] = await db.query('SELECT * FROM classroom WHERE id = :id', param);
        res.json({
            classroom: classroom,
        });
    } catch (e) {
        logError('classroom.detail', e, res);
    }
}

const create = async (req, res) => {
    try {
        var {
            name,
            description,
            parent_id,
            image,
            is_active,
        } = req.body;

        //---------validation------------
        var error = {};
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
            name,
            description,
            parent_id,
            image,
            is_active,
            created_by: req.user.username,
        }
        const [classroom] = await db.query('INSERT INTO classroom (name, description, parent_id, image, is_active, created_by) VALUES(:name, :description, :parent_id, :image, :is_active, :created_by)', param);
        res.json({
            message: 'Create classroom Successfully!',
            classroom: classroom,
        });
    } catch (e) {
        logError('classroom.create', e, res);
    }
}

const update = async (req, res) => {
    try {
        var name = req.body.name;
        var status = req.body.status;
        var description = req.body.description;
        var id = req.params.id;

        //---------validate------------
        var error = {};
        if (isEmptyOrNull(name)) {
            error.name = 'Name is required!';
        }
        // if (isEmptyOrNull(status)) {
        //     error.status = 'Status is required!'
        // }

        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
            return false;
        }
        //---------validate------------

        var param = {
            id: id,
            name: name,
            description: description,
            status: status,
        }
        const [classroom] = await db.query('UPDATE classroom SET name = :name, description = :description, status = :status WHERE id = :id', param);
        res.json({
            message: 'Create classroom Successfully!',
            classroom: classroom,
        });
    } catch (e) {
        logError('classroom.update', e, res);
    }
}

const remove = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [classroom] = await db.query("DELETE FROM classroom WHERE id = :id", param); //more secure
        res.json({
            message: 'Delete classroom Successfully!',
            classroom: classroom,
        });
    } catch (e) {
        logError("classroom.remove ", e, res);
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
}

