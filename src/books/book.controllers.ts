import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.services";
import { Book } from "./dto/books.dto";


@Controller('/my-book')
export class BookController{
    
    constructor(private bookService: BookService){}
    
    @Post('/create-book')
    createBook(@Body() book: Book):string{
        return this.bookService.createBook(book)
    }

    @Get('/find-all-books')
    getAllBooks():Book[]{
        return this.bookService.getAllBooks();
    }

    @Get('/get-book-by-id/:id')
    getBookById(@Param('id') id : string): Book {
        return this.bookService.getBookById(id);
    }

    @Put('/update-book/:id')
    updateBookById(@Body() book: Book, @Param('id') id: string) : string{
        return this.updateBookById(book, id);
    }

    @Delete('/delete-book/:id')
    deleteBookById(@Param() id:string ){
        return this.deleteBookById(id);
    }

}