import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {utils} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  load(chatId: string) {
    return this.http.get<any>(utils.serveUrl + "/message?chatId=" + chatId);
  }
}