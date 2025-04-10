export class Book{
   book: Map<String, Array<String>>

constructor(){
    this.book = new Map<String, Array<String>>
}

    add(name: String, phone: String){
        if(this.book.has(name)){
            let numbers: Array<String> | undefined = this.book.get(name)
            if(numbers) {
                numbers.push(phone)
                this.book.set(name, numbers)
            } else {
                throw Error
            }
        } else {
            this.book.set(name, [phone]);
        }
    }
    get(name: String){
        let numbers: Array<String> | undefined = this.book.get(name)
            if(numbers) {
            return numbers
            } else {
        throw Error
            }
        }
}
