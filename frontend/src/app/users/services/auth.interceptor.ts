import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken: string | null = localStorage.getItem('id_token');

        if (idToken) {
            const cloned: HttpRequest<any> = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${ idToken }`)
            });

            return next.handle(cloned);
        }
        return next.handle(req);
    }
}
