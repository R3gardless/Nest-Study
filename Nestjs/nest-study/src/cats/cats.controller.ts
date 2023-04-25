import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter) // Every Router use this HttpException Filter
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllCats() {
    console.log('hello controller');
    return { cats: 'get all cats api' };
  }

  // cats/:id
  @Get(':id')
  getCat(@Param('id', ParseIntPipe) param: number) {
    // ParseIntPipe = String to Int & Validation Error
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartCat() {
    return 'update part cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
