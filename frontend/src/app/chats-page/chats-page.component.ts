import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Route } from '../route.enum';
import { Chatroom } from './chatroom.interface';

@Component({
    selector: 'app-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.css']
})
export class ChatsPageComponent implements OnInit {
    chatrooms!: Chatroom[];
    chatroomId!: String;

    constructor(private router: Router,
                private readonly httpClient: HttpClient) {
        console.log(this.router.url);
        this.getAllChatsWithMember();
    }

    getAllChatsWithMember() {
        const chatroomsObservable = this.httpClient.get('/api/chatroom') as Observable<{ chatrooms: Chatroom[] }>;
        chatroomsObservable.subscribe((res: { chatrooms: Chatroom[] }) => {
            this.chatrooms = res.chatrooms;
            console.log(this.chatrooms);
        });
    }

    getElementByCriteria() {
        const input = <HTMLInputElement>document.getElementById('search');

        for (let i = 0; i < this.chatrooms.length; i++) {
            const button = document.getElementById(`chat_${i}`);

            if (button != null) {
                if (input.value == '') {
                    button.style.visibility = 'visible';
                } else if (button?.textContent == input.value) {
                    button.style.visibility = 'visible';
                } else if (button?.textContent != input.value) {
                    if (button?.textContent?.substring(0, input.value.length) == input.value) {
                        button.style.visibility = 'visible';
                    } else {
                        button.style.visibility = 'hidden';
                    }
                }
            }
        }
    }

    arrayElementOnIndex(n: number): string {
        return this.chatrooms[n].name;
    }

    arrayChatCount(): Array<number> {
        return Array(this.chatrooms.length);
    }

    onLogout() {
        this.router.navigate([Route.Home]);
    }

    onChat(id: string) {
        for (let index = 0; index < this.chatrooms.length; index++) {
            if(this.chatrooms[index].name == document.getElementById(id)?.innerText)
            {
                this.chatroomId = this.chatrooms[index]._id;
            }
        }
        
        this.router.navigate([Route.Chatroom]);
    }

    onCreate() {
        this.router.navigate([Route.CreateChatroomModal]);
    }

    ngOnInit() {
    }
}
