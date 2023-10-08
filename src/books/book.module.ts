import { Module } from "@nestjs/common";
import { BookService } from "./book.services";
import { BookController } from "./book.controllers";

@Module({
    imports:[],
    controllers:[BookController],
    providers:[BookService]
})
export class BookModule{

}