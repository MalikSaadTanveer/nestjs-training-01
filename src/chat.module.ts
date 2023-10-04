import {Module} from '@nestjs/common';

@Module({
    imports: [],
    controllers:[],
    providers:[],
    exports:[]
})

export class ChatModule{
    constructor(){
        console.log("I'm a chat module")
    }
}