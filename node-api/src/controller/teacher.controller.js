
const getListTeacher = async (req, res) => {
    try {
        // Simulate fetching data from a database
        const teachers = [
            { name: "Alice Smith", age: 35, subject: "Physics" },
            { name: "Bob Johnson", age: 40, subject: "Chemistry" }
        ];
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching teachers" });
    }
}

//create a teacher
const createTeacher = async (req, res) => {
    res.send('create teacher');
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
    deleteTeacher
};