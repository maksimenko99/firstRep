import { Book } from "./book";

let book: Book = new Book()

book.add("Max", "89828269897")
book.add("Max", "89999999999")
book.add("AsyA", "89635414522")
book.add("Brat", "89612495179")

console.log(book.get('Max'))

