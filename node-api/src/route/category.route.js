//import
const { getList, getDetail, create, update, remove } = require('../controller/category.controller')
const category = (app) => {
    app.get('/api/category', getList);
    app.get('/api/category/:id', getDetail);
    app.post('/api/category', create);
    app.put('/api/category', update);
    app.delete('/api/category/:id', remove);
}

module.exports = {
    category,
}