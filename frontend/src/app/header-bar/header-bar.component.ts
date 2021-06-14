import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/services/user.service';
import { Route } from '../route.enum';
import { NO_USER_LOGGED_IN_MESSAGE, USER_NAME_LOCAL_STORAGE_KEY } from '../constants';

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
            .subscribe(() => {
                const userName: string | null = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
                if (userName) {
                    this.headerMessage = `Logged in as : ${ userName }`;
                    this.userLoggedIn = true;
                } else {
                    this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
                    this.userLoggedIn = false;
                }
            });
    }

    onLogOutButtonClick(): void {
        this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
        this.userLoggedIn = false;
        this.userService.logOut();
        this.router.navigate([Route.Home]);
    }
}
