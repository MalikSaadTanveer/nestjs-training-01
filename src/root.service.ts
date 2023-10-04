import { Injectable } from '@nestjs/common'


@Injectable()
export class BookService{
    
    createBook():string{
        return "I have created a new book";
    }
  
    getBook():string{
        return "This is my first book";
    }

    getBookById(_id:Number):string{
        const id = _id;
        return  `This is my book id ${id}`;
    }

    updateBook():string{
        return "I have updated my book";
    }

    deleteBook():string{
        return "I have deleted my book";
    };

    uploadArticle(): string{
        return "Article uploaded successfully"
    }


}