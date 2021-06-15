import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateChatroomService } from './create-chatroom.service';
import { User } from './user.interface';
import { Route } from '../route.enum';

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
        this.createChatroomService.getUsers()
            .subscribe((user: User) => {
                this.users = [...this.users, user];
            });
    }

    submit(): void {
        this.step++;
    }

    previous(): void {
        this.step--;
    }

    onSelectUser(user: User): void {
        this.members = [...this.members, user];
    }

    onDeleteMember(member: User): void {
        this.members.forEach((user: User, index: number) => {
            if (user.email === member.email) {
                this.members.splice(index, 1);
            }
        });
    }

    onCreateChatroom(): void {
        this.createChatroomService.createChatroom(this.chatroomName, this.members, this.chatroomDescription);
        this.router.navigate([Route.Chatroom]);
    }
}
