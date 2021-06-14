import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateChatroomService } from '../create-chatroom-modal/create-chatroom.service';
import { User } from './user.interface';
import { Route } from '../route.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-chatroom-modal',
    templateUrl: './create-chatroom-modal.component.html',
    styleUrls: ['./create-chatroom-modal.component.css']
})

export class CreateChatroomModalComponent implements OnInit {
    searchText = '';
    step: number = 1;
    chatroomName: string = '';
    chatroomDescription: string = '';
    users: User[] = [];
    members: User[] = [];

    constructor(private readonly createChatroomService: CreateChatroomService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        this.createChatroomService.getUsers().subscribe(user => this.users.push(user));
    }

    submit() {
        this.step = this.step + 1;
    }

    previous() {
        this.step = this.step - 1;
    }

    onSelectUser(user: User) {
        this.members.push(user);
    }

    onCreateChatroom() {
        this.createChatroomService.createChatroom(this.chatroomName, "", this.members, this.chatroomDescription);
        this.router.navigate([Route.Chatroom]);
    }

}
