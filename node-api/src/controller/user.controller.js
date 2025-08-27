const { logError, isEmptyOrNull } = require('../config/service')
const db = require('../config/db')
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Config } = require('../config/config')
const moment = require('moment');

//----------get user list ------------
const getList = async (req, res) => {
    try {
        var sql = "SELECT user.*, role.name AS RoleName FROM user LEFT JOIN role ON(user.role_id = role.id);";
        const [user] = await db.query(sql);

        res.json({
            data: {
                created_at: moment().format('DD-MM-YYYY HH:mm:ss'),
                created_by: req.user.username,
                user: user
            },

        });
    } catch (e) {
        logError('user.list', e, res);
    }
}

//-----------get user detail---------------
const getDetail = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        }
        const [user] = await db.query('SELECT * FROM user WHERE id = :id', param);
        delete user[0].password;
        res.json({
            user: user[0],
        });
    } catch (e) {
        logError('user.detail', e, res);
    }
}

const create = async (req, res) => {
    try {
        var username = req.body.username;
        var password = req.body.password;
        var roleId = req.body.role_id;
        var createdBy = req.user.username;


        //---------validation------------
        var error = {};
        if (isEmptyOrNull(username)) {
            error.username = 'username is required!';
        }
        if (isEmptyOrNull(password)) {
            error.password = 'password is required!';
        }

        if (Object.keys(error).length > 0) {
            res.status(403).json({
                error: error,
            });
            return false;
        }
        //---------validation------------
        var hasPwd = bcript.hashSync(password, 10);  //encrypt password

        var param = {
            username: username,
            password: hasPwd,
            roleId: roleId,
            createdBy: createdBy,
        }
        const [user] = await db.query('INSERT INTO user (role_id, username, password, created_by) VALUES(:roleId, :username, :password, :createdBy)', param);
        res.json({
            message: 'Create user Successfully!',
            user: user,
        });
    } catch (e) {
        logError('user.create', e, res);
    }
}

const update = async (req, res) => {
    try {
        var password = req.body.password;
        var roleId = req.body.role_id;
        var isActive = req.body.is_active
        var id = req.params.id;

        //---------validate------------
        var error = {};
        if (isEmptyOrNull(password)) {
            error.password = 'password is required!'
        }
        if (isEmptyOrNull(id)) {
            error.id = 'id is required!'
        }

        if (Object.keys(error).length > 0) {
            res.json({
                error: error,
            });
            return false;
        }
        //---------validate------------
        var hasPwd = bcript.hashSync(password, 10); //encrypt password
        var param = {
            id: id,
            password: hasPwd,
            roleId: roleId,
            isActive: isActive,
        }
        const [user] = await db.query('UPDATE user SET role_id = :roleId, password = :password, is_active =:isActive WHERE id = :id', param);
        res.json({
            message: 'Create user Successfully!',
            user: user,
        });
    } catch (e) {
        logError('user.update', e, res);
    }
}

const remove = async (req, res) => {
    try {
        var param = {
            id: req.params.id,
        };
        const [user] = await db.query("DELETE FROM user WHERE id = :id", param); //more secure
        res.json({
            message: 'Delete user Successfully!',
            user: user,
        });
    } catch (e) {
        logError("user.remove ", e, res);
    }
}

const logIn = async (req, res) => {
    try {
        var username = req.body.username;
        var password = req.body.password;

        //---------validation------------
        var error = {};
        if (isEmptyOrNull(username)) {
            error.username = 'username is required!';
        }
        if (isEmptyOrNull(password)) {
            error.password = 'password is required!';
        }

        if (Object.keys(error).length > 0) {
            res.status(403).json({
                error: error,
            });
            return false;
        }
        //---------validation------------

        var param = {
            username: username,
            password: password,
        }

        const [user] = await db.query("SELECT * FROM user WHERE username =:username", param);
        if (user.length > 0) {
            if (bcript.compareSync(password, user[0].password)) {
                delete user[0].password; // delete key 'password' to response json
                //generate jwt
                var access_token = await jwt.sign({ data: user[0] }, Config.ACCESS_TOKEN_KEY, { expiresIn: "1d" });
                var refresh_token = await jwt.sign({ data: user[0] }, Config.REFRESH_TOKEN);
                res.json({
                    message: 'Log In Successfully!',
                    user: user[0],
                    access_token: access_token,
                    refresh_token: refresh_token,
                });
            } else {
                res.status(403).json({
                    error: {
                        message: "password is incorrect!"
                    }
                });
            }
        } else {
            res.status(403).json({
                error: {
                    message: "username doesn't exist!"
                }
            });
        }

    } catch (e) {
        logError("user.login ", e, res);
    }
}

const refresh_token = async (req, res) => {
    try {
        const {
            refresh_token,
        } = req.body;
        jwt.verify(refresh_token, Config.REFRESH_TOKEN, async (error, result) => {
            if (error) {
                res.status(401).send({
                    message: 'Unautorized',
                    error: error,
                });
            } else {
                //re-new access_token and refresh_token
                var user_from_token = result.data;
                const [user] = await db.query("SELECT * FROM user WHERE id=id", { id: user_from_token.id });
                delete user[0].password;
                var access_token = await jwt.sign({ data: user[0] }, Config.ACCESS_TOKEN_KEY, { expiresIn: "1d" });
                var refresh_token = await jwt.sign({ data: user[0] }, Config.REFRESH_TOKEN);
                res.json({
                    message: 'Refresh Token Successfully!',
                    user: user[0],
                    access_token: access_token,
                    refresh_token: refresh_token,
                });
            }
        });
    } catch (e) {
        logError("user.refresh_token ", e, res);
    }

}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
    logIn,
    refresh_token,
}

