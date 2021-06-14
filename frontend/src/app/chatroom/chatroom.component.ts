import { Component, OnInit, Input } from '@angular/core';
import { ChatroomService } from '../chatroom/chatroom.service';
import { Chatroom } from '../create-chatroom-modal/chatroom.interface';
import { Message } from '../chatroom/message.interface';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.component.html',
    styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
    private chatroom!: Chatroom;

    newMessage: string = '';

    messageList: Message[] = [];

    constructor(private readonly chatroomService: ChatroomService) {
    }

    ngOnInit(): void {
      this.chatroomService.getNewMessage().subscribe((message: Message) => {
        this.messageList.push(message);
      })
    }

    ngOnDestroy(): void {
        this.chatroomService.socketDisconect();
    }

    @Input()
    get Chatroom(): any {
        return this.chatroom;
    }

    set Chatroom(chatroom: any) {
        this.chatroom = chatroom;
        this.loadMessages();
    }

    loadMessages() {
      this.chatroomService.load().subscribe((message: Message) => {
            this.messageList = [...this.messageList, message];
      });
    }

    sendMessage() {
        if (this.newMessage === '') {
            return;
        }
        this.chatroomService.sendMessage(this.newMessage);
        this.newMessage = '';
    }
}
