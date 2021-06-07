import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    email?: string;

    constructor(private readonly httpClient: HttpClient) {
    }

    login(email: string, password: string): Observable<object> {
        return this.httpClient.post('/api/users/login', { email, password });
    }

    register(email: string, password: string) {
        return this.httpClient.post('/api/users/register', { email, password })
            .subscribe((result) => {
                localStorage.setItem('user', (result as any).email);
            });
    }
}
