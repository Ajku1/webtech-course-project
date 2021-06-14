import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { io } from 'socket.io-client';
import { Injectable } from '@angular/core';
import { utils } from '../utils/utils';

@Injectable({ providedIn: 'root' })
export class ChatroomService {
    // socket = io(utils.serveUrl);

    constructor(private http: HttpClient) { }

    sendMessage(message: string, id: string) {
        if (id === null) {
            return;
        }

        // this.socket.emit('message', message);
    }

    socketDisconect() {
        // this.socket.disconnect();
    }
}
