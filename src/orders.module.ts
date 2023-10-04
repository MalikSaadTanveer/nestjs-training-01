import { Module } from '@nestjs/common';


@Module({
    imports:[],
    controllers:[],
    providers:[],
    exports:[],
})

export class OrderModule {
    constructor(){
        console.log("I'm Order Module")
    }
}