import {Component} from '@angular/core';
import {Router} from '@angular/router';


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
        this.router.navigate(['home']);
    }
}
