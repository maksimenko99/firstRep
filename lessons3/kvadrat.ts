import { Color } from "./color"
import { Figuri } from "./figuri"

export class Kvadrat implements Figuri{
    sideA: number
    sideB: number
    colorZalivki: Color
    colorFon: Color

constructor(sideA: number, sideB: number, colorZalivki: Color, colorFon: Color){
    this.sideA = sideA
    this.sideB = sideB
    this.colorZalivki = colorZalivki
    this.colorFon = colorFon
}

    ploshad(): number {
        return this.sideA * this.sideB
    }

    perimetr(): number{
        return 2 *(this.sideA + this.sideB)
    }

    getColorFon(): Color {
        return this.colorFon
    }

    getColorZalivki(): Color {
        return this.colorZalivki
    }

    getInfo(){
        console.log(`Площадь квадрата ${this.ploshad()} Периметр квадрата ${this.perimetr()} Цвет заливки ${this.getColorZalivki()} Цвет фона ${this.getColorFon()}`)
    }
}


