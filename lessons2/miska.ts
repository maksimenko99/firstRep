export class Miska{
 eda: number

    constructor(eda: number){
        this.eda = eda
    }
    addEda(newEda: number){
        this.eda = this.eda + newEda
        console.log("В миске гавна в кол-ве " + this.eda)
    }
    removeEda(removeEda: number){
        if(removeEda > this.eda){
            console.log("Еды в миске нихуя")
        } else{
            this.eda = this.eda - removeEda
            console.log("Гавно уменьшилось, теперь в миске " + this.eda)
        }
    }
    getFood(){
        return this.eda
    }
}