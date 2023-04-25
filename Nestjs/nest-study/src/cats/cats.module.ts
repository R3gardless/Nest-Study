import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // Free Capsulation -> 다른 Module 에서 import 해서 사용 가능
})
export class CatsModule {}
