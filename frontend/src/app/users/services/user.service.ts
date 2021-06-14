import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { User } from '../user.interface';
import { EXPIRES_AT_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants';

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
        const expiration: string | null = localStorage.getItem(EXPIRES_AT_LOCAL_STORAGE_KEY);
        if (!expiration) {
            return false;
        }
        const expiresAt: moment.Moment = moment(JSON.parse(expiration));
        return moment().isBefore(expiresAt);
    }

    logOut(): void {
        this.currentUser = null;
        localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        localStorage.removeItem(EXPIRES_AT_LOCAL_STORAGE_KEY);
    }

    private saveCurrentUser(user: User): void {
        this.currentUser = user;
        const expiresAt: moment.Moment = moment().add(user.expiresIn, 'second');
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, user.token);
        localStorage.setItem(EXPIRES_AT_LOCAL_STORAGE_KEY, JSON.stringify(expiresAt.valueOf()));
        this.userChangedSource.next(user);
    }
}
