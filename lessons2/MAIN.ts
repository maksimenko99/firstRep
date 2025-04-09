import { Cat } from "./cat"
import { Dog } from "./dog"
import { Miska } from "./miska"

let cat1: Cat = new Cat('Барсик', 100)
let cat2: Cat = new Cat('Амеба', 150)
let dog1: Dog = new Dog('Башмак')
let miska: Miska = new Miska(100)
cat1.run(100);
cat2.run(400);
cat1.swim(10);
dog1.run(600);
dog1.run(10);
dog1.swim(15);
cat2.meow(5);
cat1.getInfo();
cat2.countCat();
dog1.countDog();
miska.addEda(85);
miska.addEda(15);
cat1.eat(miska);
cat2.eat(miska);