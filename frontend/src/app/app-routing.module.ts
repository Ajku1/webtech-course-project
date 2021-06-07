import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateChatroomModalComponent } from './create-chatroom-modal/create-chatroom-modal.component';
import { Route } from './route.enum';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
    {
        path: Route.Home,
        component: HomeComponent
    },
    {
        path: Route.Login,
        component: LoginComponent
    },
    {
        path: Route.Register,
        component: RegisterComponent
    },
    {
        path: Route.ChatsPage,
        component: ChatsPageComponent
    },
    {
        path: Route.CreateChatroomModal,
        component: CreateChatroomModalComponent
    },
    {
        path: Route.Chatroom,
        component: ChatroomComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
