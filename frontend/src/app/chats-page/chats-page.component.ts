import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Route } from "../route.enum";


@Component({
    selector: 'app-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.css']
})
export class ChatsPageComponent implements OnInit {

    constructor(private router: Router) {
        console.log(this.router.url)
    }
    
    arrayElementOnIndex(n:number): string {
        let fruits: string[] = ['Apple', 'Orange', 'Banana', 'RFRFR'];
        return fruits[n];
    }

    arrayChatCount(): number {
        let fruits: string[] = ['Apple', 'Orange', 'Banana', 'RFRFR'];
        return fruits.length;
    }

    onLogout() {
        this.router.navigate([Route.Home]);
    }

    onClick() {
        this.router.navigate(['home']);
    }

    onChat() {
        this.router.navigate([Route.Chatroom]);
    }

    onCreate(){
        this.router.navigate([Route.CreateChatroomModal]);
    }

    ngOnInit() {
    }
    //function to return list of numbers from 0 to n-1
    numSequence(n: number): Array<number> {
    return Array(n);
    }
}
