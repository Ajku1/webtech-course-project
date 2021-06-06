import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ChatsPageComponent} from './chats-page/chats-page.component';
import {CreateChatroomModalComponent} from './create-chatroom-modal/create-chatroom-modal.component';
import {ChatroomComponent} from './chatroom/chatroom.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        ChatsPageComponent,
        CreateChatroomModalComponent,
        ChatroomComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
