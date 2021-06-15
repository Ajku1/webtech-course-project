import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormControlName } from './models/login-form-control-name.enum';
import { UserService } from '../services/user.service';
import { Route } from '../../route.enum';

@Component({
    selector: 'chat-login',
    templateUrl: './login.component.html',
    styleUrls: ['../user.component.css']
})
export class LoginComponent {
    readonly submitButtonText: string = 'Login';

    readonly loginForm: FormGroup;

    readonly emailFormControl: FormControl;

    readonly passwordFormControl: FormControl;

    loginFailed: boolean = false;

    errorMessage?: string;

    constructor(formBuilder: FormBuilder,
                public readonly userService: UserService,
                private readonly router: Router) {
        this.loginForm = formBuilder.group({
            [LoginFormControlName.Email]: [null, [Validators.required, Validators.minLength(8)]],
            [LoginFormControlName.Password]: [null, [Validators.required, Validators.minLength(8)]]
        });

        this.emailFormControl = this.loginForm.get(LoginFormControlName.Email) as FormControl;
        this.passwordFormControl = this.loginForm.get(LoginFormControlName.Password) as FormControl;
    }

    onFormSubmit(): void {
        const email: string = this.emailFormControl.value;
        const password: string = this.passwordFormControl.value;
        this.userService.login(email, password)
            .subscribe(() => {
                this.router.navigate([Route.ChatsPage]);
            }, (err) => {
                this.loginFailed = true;
                this.errorMessage = err.error.message;
            });
    }
}
