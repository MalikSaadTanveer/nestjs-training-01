import { Module } from '@nestjs/common';
import { BookController } from './root.controller';
import { BookService } from './root.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})
export class RootModule {
   constructor(){ 
    console.log('root module loaded')
   }
}
