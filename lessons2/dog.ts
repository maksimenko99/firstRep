import { Animal } from "./animal";

export class Dog extends Animal{
    static countDog: number = 0

    constructor(name: string){
        super(name)
        Dog.countDog++
    }
    
    override run(a: number){
        if(a <= 200){
            console.log("Собака " + this.name + " бегит " + a)
        } else {
            console.log("Собака " + this.name + " лежит")
        }
    }

    override swim(b: number){
        if(b <= 10){
            console.log("Собака " + this.name + " плывет " + b)        
        } else {
            console.log("Собака " + this.name + " утонула")
        }
    }
    
    countDog(){
        console.log(Dog.countDog)
    }
}