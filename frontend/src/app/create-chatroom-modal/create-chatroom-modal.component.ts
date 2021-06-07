import { Component } from '@angular/core';

@Component({
    selector: 'app-create-chatroom-modal',
    templateUrl: './create-chatroom-modal.component.html',
    styleUrls: ['./create-chatroom-modal.component.css']
})

export class CreateChatroomModalComponent {
    step: number = 1;

    submit() {
        this.step += 1;
    }

    previous() {
        this.step -= 1;
    }

    searchText = '';

    members = [
        { name: 'Member1' },
        { name: 'Member2' },
        { name: 'Member3' },
        { name: 'Member4' },
        { name: 'Member5' },
        { name: 'Member6' },
        { name: 'Member7' },
        { name: 'Member8' }
    ];
}
