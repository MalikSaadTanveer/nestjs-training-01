import { Post } from "@nestjs/common";
import { Book } from "./dto/books.dto";
import { v4 as uuidv4 } from 'uuid';

export class BookService{
    public book : Book[] =[]

    createBook(book:Book): string{
        book.id = uuidv4();
        this.book.push(book)
        return "Book created successfully"
    }

    getAllBooks():Book[]{
        return this.book
    }

    getBookById(id:string):Book{
        return this.book[id];
    }

    updateBookById(book:Book, id:string):string{
        return "Book updated successfully"
    }

    deleteBookById(id:string):string{
        this.book = this.book.filter(currentBook => currentBook.id !== id);
        return "Book deleted successfully"
    }

}