import { Controller, Delete, Get, Param, Post, Put, } from "@nestjs/common";
import { BookService } from "./root.service";


@Controller('/book')
export class BookController{

    //constructor is only for getting provider;
    constructor(public bookService:BookService){}

    @Post('/create-book')
    createBook():string{
        return this.bookService.createBook();
    }

    @Get('/get-book')
    getBook():string{
        return this.bookService.getBook();
    }

    @Get('/get-book-by-id/:id')
    getBookById(@Param() params):string{
        return this.bookService.getBookById(params.id);
    }

    @Put('/update-book')
    updateBook():string{
        return this.bookService.updateBook();
    }

    @Post('/upload-article')
    uploadArticle():string{
        return this.bookService.uploadArticle()
    }

    @Delete('/delete-book')
    deleteBook():string{
        return this.bookService.deleteBook();
    }


    //--------------Without Providers-------------
    // @Post('/create-book')
    // createBook():string{
    //     return "I have created a new book";
    // }

    // @Get('/get-book')
    // getBook():string{
    //     return "This is my first book";
    // }

    // @Get('/get-book-by-id/:id')
    // getBookById(@Param() params):string{
    //     const id = params.id;
    //     return  `This is my book id ${id}`;
    // }

    // @Put('/update-book')
    // updateBook():string{
    //     return "I have updated my book";
    // }

    // @Delete('/delete-book')
    // deleteBook():string{
    //     return "I have deleted my book";
    // }


    

}