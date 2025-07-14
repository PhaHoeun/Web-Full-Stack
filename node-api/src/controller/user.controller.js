const { logError, isEmptyOrNull } = require('../config/service')
const db = require('../config/db')

//----------get user list ------------
const getList = async (req, res) => {
    try {
        var sql = "SELECT user.*, role.name AS RoleName FROM user LEFT JOIN role ON(user.role_id = role.id);";
        const [user] = await db.query(sql);
        res.json({
            user: user,
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
        res.json({
            user: user,
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
            roleId: roleId,
        }
        const [user] = await db.query('INSERT INTO user (role_id, username, password) VALUES(:roleId, :username, :password)', param);
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

        var param = {
            id: id,
            password: password,
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
            if (user[0].password === password) {
                res.json({
                    message: 'Log In Successfully!',
                    user: user[0],
                });
            } else {
                res.status(403).json({
                    error: {
                        username: "password is incorrect!"
                    }
                });
            }
        } else {
            res.status(403).json({
                error: {
                    username: "username doesn't exist!"
                }
            });
        }

    } catch (e) {
        logError("user.login ", e, res);
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
    logIn
}

