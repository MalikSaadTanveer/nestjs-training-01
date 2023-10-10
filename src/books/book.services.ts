import { Injectable, } from "@nestjs/common";
import { Book } from "./dto/books.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService{
    public book : Book[] =[]

    createBook(book:Book): string{
        book.id = uuidv4();
        this.book.push(book)
        return "Book created successfully"
    }

    getAllBooks():Book[]{
        return this.book;
    }

    getBookById(id:string):Book{
        const book = this.book?.filter(currentBook => currentBook.id === id)     
        return book[0];
    }

    updateBookById(book:Book, id:string):string{
        const currentBookId = this.book?.findIndex(currentBook => currentBook.id == id)
      
        if(currentBookId < 0){
            return "Book not found to update"
        }
        book.id = id;
        this.book[currentBookId] = book;
        return "Book updated successfully"
    }

    deleteBookById(id:string):string{
        const currentBookId = this.book?.findIndex(currentBook => currentBook.id == id)
        if(currentBookId < 0)
            return "Book not found"

        this.book = this.book.filter(currentBook => currentBook.id !== id)       
        return "Book deleted successfully"
    }

}