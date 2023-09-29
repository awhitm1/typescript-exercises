// typescriptCopy code
var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(name, age, grade) {
        this.studentName = name,
            this.studentAge = age,
            this.studentGrade = grade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.studentName, " Age: ").concat(this.studentAge, " Grade: ").concat(this.studentGrade));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function (gradeThreshold) {
        if (this.studentGrade >= gradeThreshold) {
            return true;
        }
        else {
            return false;
        }
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var newStudent = new Student("Aaron", 48, 80);
console.log(newStudent);
newStudent.displayInfo();
console.log("Your grade is passing: ".concat(newStudent.isPassing(60)));
console.log("Your grade is passing: ".concat(newStudent.isPassing(81)));
