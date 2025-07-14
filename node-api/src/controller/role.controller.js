const db = require('../config/db')
const { logError } = require('../config/service')

const getList = async (req, res) => {
    try {
        //query from db
        const [role] = await db.query("SELECT * FROM role;");
        //const [data1] = await db.query("SELECT * FROM customer;");
        // const [data2] = await db.query("SELECT * FROM teacher;");

        res.json({
            role: role,
            //list1:data1,
            //list2:data2,
        });
    } catch (e) {
        logError("role.list ", e, res);
    }

}

const getDetail = async (req, res) => {

    try {
        var param = {
            Id: req.params.id,
        };
        const [role] = await db.query("SELECT * FROM role WHERE Id = :Id", param); //more secure
        res.json({
            role: role,
        });
    } catch (e) {
        // res.json({
        //     error: e,
        // });
        logError("role.detail ", e, res);
    }
}

const create = async (req, res) => {
    try {
        var param = {
            Name: req.body.Name,
            Code: req.body.Code,
        };
        const [role] = await db.query("INSERT INTO role (Name, Code) VALUES (:Name, :Code)", param); //more secure
        res.json({
            message: 'Create Role Successfully!',
            role: role,
        });
    } catch (e) {
        // res.json({
        //     error: e.message,
        // });
        logError("role.create ", e, res);
    }
}

const update = async (req, res) => {
    try {
        var param = {
            Id: req.body.Id,
            Name: req.body.Name,
            Code: req.body.Code,
        };
        const [role] = await db.query("UPDATE role SET Name = :Name, Code = :Code WHERE Id = :Id", param); //more secure
        res.json({
            message: 'Update Role Successfully!',
            role: role,
        });
    } catch (e) {
        logError("role.update ", e, res);
    }
}

const remove = async (req, res) => {
    try {
        var param = {
            Id: req.params.id,
        };
        const [role] = await db.query("DELETE FROM teacher WHERE Id = :Id", param); //more secure
        res.json({
            message: 'Delete Role Successfully!',
            role: role,
        });
    } catch (e) {
        logError("role.remove ", e, res);
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
}

