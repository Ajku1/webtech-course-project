import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { Route } from "../route.enum";


@Component({
    selector: 'app-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.css']
})
export class ChatsPageComponent {
    constructor(private router: Router) {
        console.log(this.router.url)
    }
    
    onLogout() {
        this.router.navigate([Route.Home]);
    }

    onChat() {
        this.router.navigate([Route.Chatroom]);
    }

    onCreate() {
        this.router.navigate([Route.CreateChatroomModal]);
    }
}
