import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterFormControlName } from './models/register-form-control-name.enum';
import { UserService } from '../services/user.service';
import { Route } from '../../route.enum';

@Component({
    selector: 'chat-register',
    templateUrl: './register.component.html',
    styleUrls: ['../user.component.css']
})
export class RegisterComponent {
    readonly submitButtonText: string = 'Register';

    readonly registerForm: FormGroup;

    readonly emailFormControl: FormControl;

    readonly nameFormControl: FormControl;

    readonly passwordFormControl: FormControl;

    constructor(formBuilder: FormBuilder,
                public readonly userService: UserService,
                private readonly router: Router) {
        this.registerForm = formBuilder.group({
            [RegisterFormControlName.Email]: [null, [Validators.required, Validators.minLength(8)]],
            [RegisterFormControlName.Password]: [null, [Validators.required, Validators.minLength(8)]],
            [RegisterFormControlName.Name]: [null, [Validators.required, Validators.minLength(8)]]
        });
        this.emailFormControl = this.registerForm.get(RegisterFormControlName.Email) as FormControl;
        this.nameFormControl = this.registerForm.get(RegisterFormControlName.Name) as FormControl;
        this.passwordFormControl = this.registerForm.get(RegisterFormControlName.Password) as FormControl;
    }

    onFormSubmit(): void {
        const email: string = this.emailFormControl.value;
        const password: string = this.passwordFormControl.value;
        const name: string = this.nameFormControl.value;
        this.userService.register(email, password, name)
            .subscribe(() => {
                this.router.navigate([Route.ChatsPage]);
            });
    }
}
