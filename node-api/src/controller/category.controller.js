var categoryList = [
    {
        id: 1,
        name: 'Mobile App',
        des: 'Des Mobile App',
    },
    {
        id: 2,
        name: 'Back-End',
        des: 'Des Back-End',
    },
];

const getList = (req, res) => {
    res.json({
        list: categoryList,
    });
}

const getDetail = (req, res) => {
    var id = req.params.id;

    //search item by id
    var data = [];
    categoryList.map((item, _) => {
        if (id == item.id) {
            data = item;
        }
    })

    res.json({
        list: data,
    });
}

const create = (req, res) => {
    var body = req.body;

    //add new element from front end to list
    categoryList.push(body); 

    res.json({
        message: 'Create Success!',
        total: categoryList.length,
        list: categoryList,
    });
}

const update = (req, res) => {
    var body = req.body;

    //update by id
    categoryList.map((item, idx) => { 
        if (body.id == item.id) {
            //process update
            categoryList[idx].name = body.name;
            categoryList[idx].des = body.des;
        }
    });
    
    res.json({
        message: 'Update Success!',
        list: categoryList,
    });
}

const remove = (req, res) => {
    var id = req.params.id;
    var data = [];

    //search id to remove
    categoryList.map((item, idx) => {
        if (id != item.id) {
            data.push(item);
        }
    });

    //update list
    categoryList = data;

    res.json({
        message: 'Remove Success!',
        list: categoryList,
   })
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    remove,
}

