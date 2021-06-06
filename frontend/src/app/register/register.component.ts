import { Component } from '@angular/core';
import { RegisterFormControlName } from "./models/register-form-control-name.enum";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { Route } from "../route.enum";

@Component({
    selector: 'chat-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    readonly submitButtonText: string = 'Register';

    readonly registerFormControlNames: typeof RegisterFormControlName = RegisterFormControlName;
    readonly registerForm: FormGroup;

    constructor(formBuilder: FormBuilder,
                private readonly userService: UserService,
                private readonly router: Router) {
        this.registerForm = formBuilder.group({
            [RegisterFormControlName.Email]: [null, Validators.required],
            [RegisterFormControlName.Password]: [null, Validators.required]
        });
    }

    onFormSubmit(): Promise<boolean> {
        const email: string = this.registerForm.get(RegisterFormControlName.Email)?.value;
        const password: string = this.registerForm.get(RegisterFormControlName.Password)?.value;
        this.userService.register(email, password);
        return this.router.navigate([Route.ChatsPage]);
    }
}
