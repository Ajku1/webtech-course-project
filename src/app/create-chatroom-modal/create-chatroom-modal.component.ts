import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-chatroom-modal',
  templateUrl: './create-chatroom-modal.component.html',
  styleUrls: ['./create-chatroom-modal.component.css']
})

export class CreateChatroomModalComponent implements OnInit {
  step: any = 1;
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }


  members: any = [];
  newMember : string = '';
    
  addMember() {
    if (this.newMember == '') {
    }
    else {
      this.members.push(this.newMember);
      this.newMember = '';
    }
  }

  deleteMember(index : any) {
    this.members.splice(index, 1);
  }

}




