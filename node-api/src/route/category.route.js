//import
const { validate_token } = require('../config/service');
const { getList, getDetail, create, update, remove } = require('../controller/category.controller')

const category = (app) => {
    app.get('/api/category', validate_token(), getList);
    app.get('/api/category/:id', validate_token(), getDetail);
    app.post('/api/category', validate_token(), create);
    app.put('/api/category/:id', validate_token(), update);
    app.delete('/api/category/:id', validate_token(), remove);
}

module.exports = {
    category,
}

// create, update, remove