import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Message } from './message.interface';

@Injectable({ providedIn: 'root' })
export class ChatroomService {
    chatroomId = '';
    private socket = io("localhost:3000", { transports: ["websocket"] });
    public message$: BehaviorSubject<Message> = new BehaviorSubject(new Message('', '', new Date()));

    constructor(private http: HttpClient) { }

    load() : Observable<Message> {
        return this.http.get<Message>('/api/message');
    }

    loadMessage(){
        return this.http.get<any>('/api/message');
    }

    sendMessage(message: string) {
        this.socket.emit('message', message);
    }
    
    getNewMessage = () => {
        this.socket.on('message', (message: Message) => {
          this.message$.next(message);
        });
        return this.message$.asObservable();
    };
    
    socketDisconect() {
        this.socket.off('message');
    }
}
