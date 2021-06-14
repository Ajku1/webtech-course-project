import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { User } from '../user.interface';
import { USER_EMAIL_LOCAL_STORAGE_KEY } from '../../constants';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly userChangedSource: Subject<User> = new Subject<User>();

    readonly userChanged$: Observable<User> = this.userChangedSource.asObservable();

    private currentUser: User | null = null;

    constructor(private readonly httpClient: HttpClient) {
    }

    login(email: string, password: string): Observable<User> {
        const loginUserObservable = this.httpClient.post('/api/users/login', { email, password }) as Observable<User>;

        return loginUserObservable
            .pipe(
                tap((user: User) => this.saveCurrentUser(user)),
                take(1)
            );
    }

    register(email: string, password: string, name: string): Observable<User> {
        const registerUserObservable = this.httpClient.post('/api/users/register', {
            email,
            password,
            name
        }) as Observable<User>;

        return registerUserObservable
            .pipe(
                tap((user: User) => this.saveCurrentUser(user)),
                take(1)
            );
    }

    isLoggedIn(): boolean {
        return moment().isBefore(this.getExpiration());
    }

    logOut(): void {
        this.currentUser = null;
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    getExpiration() {
        const expiration: string = localStorage.getItem('expires_at') as string;
        const expiresAt: string = JSON.parse(expiration);
        return moment(expiresAt);
    }

    private saveCurrentUser(user: User): void {
        console.log(user);
        this.currentUser = user;
        const expiresAt = moment().add(user.token.expiresIn, 'second');

        localStorage.setItem('id_token', user.token.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        this.userChangedSource.next(user);
    }
}
