import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { User } from './user.interface';
import { USER_EMAIL_LOCAL_STORAGE_KEY } from '../constants';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly userChangedSource: Subject<User> = new Subject<User>();

    readonly userChanged$: Observable<User> = this.userChangedSource.asObservable();

    private currentUser: User | null = null;

    private readonly isLoggedInSource: Subject<boolean> = new Subject<boolean>();

    readonly isLoggedIn$: Observable<boolean> = this.isLoggedInSource.asObservable();

    isLoggedIn: boolean = false;

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

    logOut(): void {
        this.currentUser = null;
        this.isLoggedIn = false;
        localStorage.removeItem(USER_EMAIL_LOCAL_STORAGE_KEY);
        this.isLoggedInSource.next(false);
    }

    private saveCurrentUser(user: User): void {
        this.currentUser = user;
        this.isLoggedIn = true;
        localStorage.setItem(USER_EMAIL_LOCAL_STORAGE_KEY, user.email);
        this.userChangedSource.next(user);
        this.isLoggedInSource.next(true);
    }
}
