import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log("I am manul book api middleware")
        next()
    }

}