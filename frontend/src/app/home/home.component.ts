import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from "../route.enum";

@Component({
    selector: 'chat-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    readonly heading: string = 'Welcome to the chat!';
    readonly loginButtonText: string = 'Login if you are already an user';
    readonly registerButtonText: string = 'Register here if you are new';

    constructor(private readonly router: Router) {
    }


    navigateToLoginPage() {
        this.router.navigate([Route.Login]);
    }

    navigateToRegisterPage() {
        this.router.navigate([Route.Register]);
    }
}
