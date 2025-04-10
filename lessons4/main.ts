import { Student } from "./students";

let student1: Student = new Student('Alesha', '555', 5, 1)
let student2: Student = new Student('Alena', '555', 2, 2)
let student3: Student = new Student('Asya', '555', 3, 3)
let student4: Student = new Student('Max', '555', 2, 4)
let students: Array<Student> = [student1, student2, student3, student4]

function outputAll(students: Array<Student>){
    for(let student of students){
        let startIndex = students.indexOf(student)
        console.log(student, startIndex)
    }
}

function viborka(students: Array<Student>){
    for(let student of students){
        if(student.score < 3){
            let startIndex = students.indexOf(student)
            students.splice(startIndex, 1)
        } else {
            student.course++
        }
        
    }
}

console.log('Before')
outputAll(students)
viborka(students)
console.log('After')
outputAll(students)