// typescriptCopy code
class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;

    // Define the constructor here
    constructor(
        name: string, age: number, grade: number
    ) {
        this.studentName = name,
        this.studentAge = age,
        this.studentGrade = grade
    }
    // Define the displayInfo method here
    displayInfo(): void {
        console.log(`Name: ${this.studentName} Age: ${this.studentAge} Grade: ${this.studentGrade}`);
    }    
    // Define the isPassing method here
    isPassing(gradeThreshold: number): any {
        if (this.studentGrade >= gradeThreshold) {
            return true;
        } else {
            return false;
        }
    }
}

// Instantiate a new student object and call the methods to test your class
let newStudent =  new Student("Aaron", 48, 80) ; 
console.log(newStudent);
newStudent.displayInfo();
console.log(`Your grade is passing: ${newStudent.isPassing(60)}`);
console.log(`Your grade is passing: ${newStudent.isPassing(81)}`);