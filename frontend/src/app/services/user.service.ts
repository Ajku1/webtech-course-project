import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({providedIn: "root"})
export class UserService {
    email?: string;

    constructor(private readonly httpClient: HttpClient) {
    }

    login(email: string, password: string): Observable<object> {
        return this.httpClient.post(`/api/users/login`, {email, password})
            .pipe(tap((result) => this.saveUserInLocalStorage((result as any).email)));
    }

    register(email: string, password: string) {
        return this.httpClient.post(`/api/users/register`, {email, password}).subscribe((result) => {
            this.saveUserInLocalStorage((result as any).email);
        })
    }

    saveUserInLocalStorage(email: string): void {
        localStorage.setItem('user', email);
    }
}
