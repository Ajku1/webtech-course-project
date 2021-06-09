import { Component } from '@angular/core';
import { RegisterFormControlName } from "./models/register-form-control-name.enum";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'chat-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    submitButtonText: string = 'Register';

    readonly registerFormControlNames: typeof RegisterFormControlName = RegisterFormControlName;
    readonly registerForm: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.registerForm = formBuilder.group({
            [RegisterFormControlName.Email]: ['', Validators.required],
            [RegisterFormControlName.Password]: ['', Validators.required]
        });
    }

    onFormSubmit(): void {
        alert('Form is valid. Implement register logic here...');
    }
}
