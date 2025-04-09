export class Animal{
  name: string
  static countAnimal: number = 0

constructor (name: string){
    this.name = name
    Animal.countAnimal++
    }

   run(a: number){
    console.log("Животное " + this.name + " бегит " + a)
   }
   swim(b: number){
    console.log("Животное " + this.name + " плывет " + b)
   }
   getInfo(){
    console.log(Animal.countAnimal)
   }
}
