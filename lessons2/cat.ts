import { Animal } from "./animal";
import { Miska } from "./miska";

export class Cat extends Animal{

    static countCat: number = 0
    sytost: boolean
    eda: number
constructor(name: string,eda: number){
    super(name)
    this.sytost = false
    this.eda = eda
    Cat.countCat++
    }
    override run(a: number){
        if(a <= 200){
            console.log("Кот " + this.name + " бегит " + a)
        } else {
            console.log("Кот " + this.name + " не бегит")
        }
    }
    override swim(b: number){
        console.log("Кот " + this.name + " не умеет плавать")
    } 
    meow(amount: number){
        console.log("Кот " + this.name + " мяукнул " + amount + " раз")
    }
    countCat(){
        console.log(Cat.countCat)
    }
    eat(miska:Miska){
        let e: number = miska.getFood()
        if(e < this.eda){
            console.log("Кот " + this.name + " не ест")
        } else {
        miska.removeEda(this.eda)
        this.sytost = true;
            console.log("Кот " + this.name + " ссыт")
        }
    }
}