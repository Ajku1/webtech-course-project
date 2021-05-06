import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.css']
})
export class ChatsPageComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) {
    console.log(this.router.url)
  }

  ngOnInit(): void {
  }

  onLogout(){
    // TODO!
    // open home page of the project
    // window.open("https://www.google.bg/?hl=bg", "_self");
    this.router.navigate(['home']);
  }
}
