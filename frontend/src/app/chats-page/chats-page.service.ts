import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chatroom } from './chatroom.interface';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class ChatsPageService {
    constructor(private readonly httpClient: HttpClient) {
    }

    getChatRooms(): Observable<Chatroom> {
        return this.httpClient.get<Chatroom>('/api/chatroom');
    }

    getUsers(): Observable<User> {
        return this.httpClient.get<User>('/api/users');
    }
}
