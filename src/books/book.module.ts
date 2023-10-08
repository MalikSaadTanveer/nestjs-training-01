import { Module } from "@nestjs/common";
import { BookService } from "./book.services";

@Module({
    imports:[],
    controllers:[],
    providers:[BookService]
})
export class BookModule{

}