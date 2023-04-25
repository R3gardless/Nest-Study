import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // business logic
    return 'Hello World!';
  }
}
