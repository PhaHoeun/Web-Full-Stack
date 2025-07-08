
const getListTeacher = async (req, res) => {

    //get parameter query
    let testQuery = req.query;
    const teachers = [
        { id: 1, name: "Pha", age: 35, subject: "Physics" },
        { id: 2, name: "Ra Smach", age: 40, subject: "Chemistry" }
    ];

    res.json({
        'teacher': [],
        'query': testQuery,
        //or
        'name': testQuery.name,
        //or
        'id': req.query.id,
    });
}

//get teacher detail
const getTeacherDetail = (req, res) => {
    res.json({
        'param': req.params
    });
}

//create a teacher
const createTeacher = async (req, res) => {
    res.json({
        'body': req.body
    })
}

//update a teacher
const updateTeacher = async (req, res) => {
    res.send('update teacher');
}

//delete a teacher
const deleteTeacher = async (req, res) => {
    res.send('delete teacher');
}

module.exports = {
    getListTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherDetail
};