import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN_LOCAL_STORAGE_KEY } from '../../constants';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken: string | null = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);

        if (idToken) {
            const cloned: HttpRequest<any> = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${ idToken }`)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}
