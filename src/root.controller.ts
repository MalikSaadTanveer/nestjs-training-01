import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller('/book')
export class BookController{

    @Post('/create-book')
    createBook():string{
        return "I have created a new book";
    }

    @Get('/get-book')
    getBook():string{
        return "This is my first book";
    }

    @Get('/get-book-by-id/:id')
    getBookById(@Param() params):string{
        const id = params.id;
        return  `This is my book id ${id}`;
    }

    @Put('/update-book')
    updateBook():string{
        return "I have updated my book";
    }

    @Delete('/delete-book')
    deleteBook():string{
        return "I have deleted my book";
    }

}