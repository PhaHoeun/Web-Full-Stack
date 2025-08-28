//import
const { validate_token } = require('../config/service');
const { getList, getDetail, create, update, remove } = require('../controller/classroom.controller')

const classroom = (app) => {
    app.get('/api/classroom', validate_token(), getList);
    app.get('/api/classroom/:id', validate_token(), getDetail);
    app.post('/api/classroom', validate_token(), create);
    app.put('/api/classroom/:id', validate_token(), update);
    app.delete('/api/classroom/:id', validate_token(), remove);
}

module.exports = {
    classroom,
}

// create, update, remove