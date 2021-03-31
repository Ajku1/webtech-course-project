import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginFormControlName } from "./models/login-form-control-name.enum";

@Component({
    selector: 'chat-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    submitButtonText: string = 'Login';

    readonly loginFormControlNames: typeof LoginFormControlName = LoginFormControlName;
    readonly loginForm: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.loginForm = formBuilder.group({
            [LoginFormControlName.Email]: ['', Validators.required],
            [LoginFormControlName.Password]: ['', Validators.required]
        });
    }

    onFormSubmit(): void {
        alert('Form is valid. Implement login logic here...');
    }
}
