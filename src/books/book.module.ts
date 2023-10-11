import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookService } from "./book.services";
import { BookController } from "./book.controllers";
import { BookMiddleWare } from "./book.middleware";

@Module({
    imports:[],
    controllers:[BookController],
    providers:[BookService]
})
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleWare).forRoutes('my-book')
    }

}