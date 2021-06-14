import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Route } from "../route.enum";
import { Observable } from 'rxjs';
// import { ChatroomService } from '../chats-page/chats-page.component.spec';
import { HttpClient } from '@angular/common/http';
import { ChatsPageService } from './chats-page.service';
import { Chatroom } from './chatroom.interface';
import { User } from './user.interface';


@Component({
    selector: 'app-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.css']
})
export class ChatsPageComponent implements OnInit {
    chats: string[] = ['Chat1', 'Chat2', 'Chat3', 'Chat4', 'Chat5'];
    //private readonly chatroomService: ChatroomService,

    chatrooms: Chatroom[] = [];
    users: User[] = [];
    
    constructor( private router: Router,
        private readonly httpClient: HttpClient, private readonly chatspageservice: ChatsPageService) {
        console.log(this.router.url);
    }

    getAllChatsWithMember() {
        this.chatspageservice.getUsers().subscribe((user: User) => {
            this.users = [...this.users, user];

        });        
    }

    getChats() {

        let a = this.chatrooms[0].name;
        // console.log(this.chatrooms[0]);
        // console.log(this.chatrooms.find(i => i.name == "Chat 6"));
        this.chatrooms.forEach(element => {
            console.log(element);
        });
        // console.log((this.chatrooms[0]).name);
    }

    getElementByCriteria() {
        var input = <HTMLInputElement>document.getElementById("search");

        for (let i = 0; i < this.chats.length; i++) {
            var button = document.getElementById("chat_" + i);

            if(button != null) {
                if(input.value == "") {
                    button.style.visibility = "visible";
                } else if (button?.textContent == input.value)
                {
                    button.style.visibility = "visible";
                } 
                else if(button?.textContent != input.value) {
                    if(button?.textContent?.substring(0, input.value.length) == input.value) {
                        button.style.visibility = "visible";
                    } else {
                        button.style.visibility = "hidden";
                    }
                }
            }
        }
    }

    arrayElementOnIndex(n:number): string {
        return this.chatrooms[n].name;
    }

    arrayChatCount(): Array<number> {

        return Array(this.chatrooms.length);
    }

    onLogout() {
        this.router.navigate([Route.Home]);
    }

    onClick() {
        this.router.navigate([Route.Home]);
    }

    onChat() {
        this.router.navigate([Route.Chatroom]);
    }

    onCreate(){
        this.router.navigate([Route.CreateChatroomModal]);
    }

    async ngOnInit() {
        await this.chatspageservice.getChatRooms().subscribe(chatroom => {
            this.chatrooms = Array.of(chatroom);
        });
    }

    // function to return list of numbers from 0 to n-1
    numSequence(n: number): Array<number> {
        return Array(n);
    }

}
