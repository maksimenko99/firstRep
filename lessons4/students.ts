export class Student{
    name: String
    group: String
    score: number
    course: number

    constructor(name: String, group: String, score: number, course: number){
        this.name = name
        this.group = group
        this.score = score
        this.course = course
    }

    printInfo(){
        console.log(`${this.name} ${this.group} ${this.score} ${this.course}`)
    }
    setName(name: String){
        this.name = name
    }
}
