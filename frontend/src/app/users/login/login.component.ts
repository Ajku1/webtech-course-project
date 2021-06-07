import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormControlName } from './models/login-form-control-name.enum';
import { UserService } from '../user.service';
import { Route } from '../../route.enum';

@Component({
    selector: 'chat-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    readonly submitButtonText: string = 'Login';

    readonly loginFormControlNames: typeof LoginFormControlName = LoginFormControlName;

    readonly loginForm: FormGroup;

    invalidCredentials: boolean = false;

    constructor(formBuilder: FormBuilder,
                private readonly userService: UserService,
                private readonly router: Router) {
        this.loginForm = formBuilder.group({
            [LoginFormControlName.Email]: ['', Validators.required],
            [LoginFormControlName.Password]: ['', Validators.required]
        });
    }

    onFormSubmit(): void {
        const email: string = this.loginForm.get(LoginFormControlName.Email)?.value;
        const password: string = this.loginForm.get(LoginFormControlName.Password)?.value;
        this.userService.login(email, password).subscribe((res) => {
            if ((res as any).result) {
                localStorage.setItem('user', email);
                this.router.navigate([Route.ChatsPage]);
            } else {
                this.invalidCredentials = true;
            }
        });
    }
}
