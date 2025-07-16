//import
const { validate_token } = require('../config/service');
const { getList, getDetail, create, update, remove, logIn, refresh_token } = require('../controller/user.controller')


const user = (app) => {
    app.get('/api/user',validate_token(), getList);
    app.post('/api/user/login', logIn);
    app.get('/api/user/:id', validate_token(), getDetail);
    app.post('/api/user', validate_token(), create);
    app.put('/api/user/:id', validate_token(), update);
    app.delete('/api/user/:id', validate_token(), remove);
    app.post('/api/user/refresh_token', refresh_token);
}

module.exports = {
    user,
}
