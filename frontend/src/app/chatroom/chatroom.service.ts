import { HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { io } from "socket.io-client";

export class ChatroomService {


    constructor(private http: HttpClient) { }

    sendMessage(message: string)
    {
        //TODO
    }
}