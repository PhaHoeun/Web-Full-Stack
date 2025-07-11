const db = require('../config/db')

const getList = async (req, res) => {
    try {
        //query from db
        const [role] = await db.queryss("SELECT * FROM role;");
        //const [data1] = await db.query("SELECT * FROM customer;");
        // const [data2] = await db.query("SELECT * FROM teacher;");

        res.json({
            role: role,
            //list1:data1,
            //list2:data2,
        });
    } catch (e) {
        console.log("error get role list ------->>> : " + e);
        //send message
        res.status(500).send({
            error: "Internal Server Error!"
        });
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

        console.log("error get role detail ------->>> : " + e);
        res.status(500).send({
            error: "Internal Server Error!"
        });
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
        //     error: e,
        // });
        console.log("error create role ------->>> : " + e);
        res.status(500).send({
            error: "Internal Server Error!"
        });
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
        console.log("error update role ------->>> : " + e);
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
        console.log("error delete role ------->>> : " + e);
        res.status(500).send({
            error: "Internal Server Error!"
        });
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
}

