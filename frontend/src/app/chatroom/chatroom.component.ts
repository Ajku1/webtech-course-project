import { Component, OnInit, Input} from '@angular/core';
import {ChatroomService} from '../chatroom/chatroom.service';
import {Chatroom} from '../create-chatroom-modal/chatroom.interface';
import {MessageService} from '../chatroom/message.service';
import {Message} from '../chatroom/message.interface';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.component.html',
    styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent  implements OnInit{
    //private chatroom: Chatroom;
    //messageService: MessageService;
    newMessage: string = "";
    messageList: Message[] = [];

    constructor(
        private chatroom: Chatroom, 
        private messageService: MessageService,
        private chatroomService: ChatroomService
      ) {}
    

    ngOnInit(): void {
    
    }

    @Input()
    get Chatroom(): any { return this.chatroom; }
    set Chatroom(chatroom: any) {
      this.chatroom = (chatroom);
      //this.chatService.setChatId(chatroom.id)
      //this.loadMessages();
    }

    loadMessages() {
        this.messageService.load(this.chatroom.id)
          .subscribe(
            result => {
              if (result.result) {
                this.messageList = result.message_list;
              }
              else {
                console.log("No message to send.");
              }
            },
            () => { }
          );
      }

      sendMessage() {
          if (this.newMessage === ""){
              return;
          }
          this.chatroomService.sendMessage(this.newMessage);
      }
}
