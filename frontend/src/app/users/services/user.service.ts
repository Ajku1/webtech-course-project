import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { User } from '../user.interface';
import { EXPIRES_AT_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY, USER_NAME_LOCAL_STORAGE_KEY } from '../../constants';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly userChangedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    readonly userChanged$: Observable<boolean> = this.userChangedSource.asObservable();

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
        localStorage.removeItem(EXPIRES_AT_LOCAL_STORAGE_KEY);
        localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        localStorage.removeItem(USER_NAME_LOCAL_STORAGE_KEY);
        this.userChangedSource.next(false);
    }

    getFormControlErrorMessage(formControl: FormControl): string {
        if (formControl.hasError('required')) {
            return 'You must enter a value';
        }
        if (formControl.hasError('minlength')) {
            return 'Field must contain at least 8 symbols';
        }

        return '';
    }

    private saveCurrentUser(user: User): void {
        const expiresAt: moment.Moment = moment().add(user.expiresIn, 'second');
        localStorage.setItem(EXPIRES_AT_LOCAL_STORAGE_KEY, JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, user.token);
        localStorage.setItem(USER_NAME_LOCAL_STORAGE_KEY, user.name);
        this.userChangedSource.next(true);
    }
}
