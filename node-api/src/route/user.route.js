//import
const { getList, getDetail, create, update, remove, logIn } = require('../controller/user.controller')
const user = (app) => {
    app.get('/api/user', getList);
    app.post('/api/user/login', logIn);
    app.get('/api/user/:id', getDetail);
    app.post('/api/user', create);
    app.put('/api/user/:id', update);
    app.delete('/api/user/:id', remove);
}

module.exports = {
    user,
}

// create, update, remove