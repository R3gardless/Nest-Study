import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'; // 공부 추천!

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  // Middleware 와 실행순서 차이
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Before = Middleware 에서 처리
    return next.handle().pipe(
      map((data) => ({
        // data from response -> controller return value
        success: true,
        data,
      })),
    );
  }
}
