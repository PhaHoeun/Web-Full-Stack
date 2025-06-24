const course = ["C++", "Java", "Dart"];
const pi = 3.14;
const objPersion = {
    id: 101,
    name: "Pha",
    gender: "Male",
}

function getGradeByAvg(average) {
    if (average < 50) {
        console.log('Grade F')
    } else if (average <= 65) {
        console.log('Grade E')
    } else if (average <= 75) {
        console.log('Grade D')
    } else if (average <= 85) {
        console.log('Grade C')
    } else if (average <= 95) {
        console.log('Grade B')
    } else {
        console.log('Grade A')
    }
    if (average < 50) {
        console.log('Failed')
    } else {
        console.log('Passed')
    }
}

module.exports = {
    course, pi, objPersion, getGradeByAvg,
}