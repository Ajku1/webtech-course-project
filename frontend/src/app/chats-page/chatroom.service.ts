import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ChatroomService {

    constructor(private readonly httpClient: HttpClient) {
    }  
    
    getChats(): Observable<object> {
        return this.httpClient.get('/api/chatroom');
    }
}