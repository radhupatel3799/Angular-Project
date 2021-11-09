import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { HeaderInterceptor } from './header.interceptor';

describe('HeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
    providers: [
      HeaderInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: HeaderInterceptor = TestBed.inject(HeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
