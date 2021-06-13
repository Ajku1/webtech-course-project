import { Component } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import { User } from '../users/user.interface';
import { NO_USER_LOGGED_IN_MESSAGE } from '../constants';

@Component({
    selector: 'chat-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
    headerMessage: string = NO_USER_LOGGED_IN_MESSAGE;
    userLoggedIn: boolean = false;

    constructor(private readonly userService: UserService,
                private readonly router: Router) {
        userService.userChanged$
            .subscribe((user: User) => {
                this.headerMessage = `You are logged in as: ${ user.name }`;
            });
        userService.isLoggedIn$
            .subscribe((isLoggedIn: boolean) => {
                this.userLoggedIn = isLoggedIn;
            });
    }

    onLogOutButtonClick(): void {
        this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
        this.userService.logOut();
        this.router.navigate([Route.Home]);
    }
}
