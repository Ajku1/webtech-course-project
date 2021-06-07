import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    currentUser?: User;

    constructor(private readonly httpClient: HttpClient) {
    }

    login(email: string, password: string): Observable<object> {
        return this.httpClient.post('/api/users/login', { email, password });
    }

    register(email: string, password: string, name: string): void {
        const userObservable = this.httpClient.post('/api/users/register', { email, password, name }) as Observable<User>;
        userObservable.pipe(take(1))
            .subscribe((user: User) => {
                this.currentUser = user;
            });
    }
}
