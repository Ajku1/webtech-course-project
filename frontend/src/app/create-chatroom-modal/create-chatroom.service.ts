import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class CreateChatroomService {
    constructor(private readonly httpClient: HttpClient) {
    }

    getUsers(): Observable<User> {
        return this.httpClient.get<User>('/api/users');
    }

    createChatroom(name: string, members: User[], description: string): void {
        this.httpClient.post<any>('/api/chatroom', {
            name,
            members,
            description,
            messages: []
        }).subscribe();
    }
}
