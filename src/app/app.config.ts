import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { authInterceptor } from '@app/shared/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync(), provideRouter(routes), provideHttpClient(
    withFetch(), withInterceptors([authInterceptor]),
  )
  ]
};
