import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  // Class -> Module -> Run in main
  constructor(private readonly appService: AppService) {}

  // cats/hello
  @Get('hello/:id/:name') // Decorator + Stick into below func
  getHello() {
    // @Body() body = req.body
    // @Param() param = req.params

    return this.appService.getHello();
  }
}
