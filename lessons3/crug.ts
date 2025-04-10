import { Color } from "./colors";
import { Figuri } from "./figuri";

export class Crug implements Figuri{
    radius: number
    colorZalivki: Color
    colorFon: Color

constructor(radius: number, colorZalivki: Color, colorFon: Color){
    this.radius = radius
    this.colorZalivki = colorZalivki
    this.colorFon = colorFon
    }

   ploshad(): number {
        return Math.PI * this.radius * this.radius
    }
    
    perimetr(): number{
        return 2 * Math.PI * this.radius
    }

    getColorFon(): Color {
        return this.colorFon
    }

    getColorZalivki(): Color {
        return this.colorZalivki
    }

    getInfo(){
        console.log(`Площадь круга ${this.ploshad()} Периметр круга ${this.perimetr()} Цвет заливки ${this.getColorZalivki()} Цвет фона ${this.getColorFon()}`)
    }
}