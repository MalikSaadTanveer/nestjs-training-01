import { Module } from '@nestjs/common';
import { OrderModule } from './orders.module';
import { UserModule } from './users.module';
import { ChatModule } from './chat.module';
import { BookController } from './root.controller';

@Module({
  imports: [OrderModule, UserModule, ChatModule],
  controllers: [BookController],
  providers: [],
  exports:[]
})
export class RootModule {
   constructor(){ 
    console.log('root module loaded')
   }
}
