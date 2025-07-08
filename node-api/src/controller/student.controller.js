const getListStudent = (req, res) => {
    res.send('get list student');

}
const createStudent = (req, res) => {
    res.send('create student');
}
const updateStudent = (req, res) => {
    res.send('update student');
}
const deleteStudent = (req, res) => {
    res.send('delete student');
}

module.exports = {
    getListStudent,
    createStudent,
    updateStudent,
    deleteStudent
};