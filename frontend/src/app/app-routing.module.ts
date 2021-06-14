import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { CreateChatroomModalComponent } from './create-chatroom-modal/create-chatroom-modal.component';
import { Route } from './route.enum';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AuthGuardService } from './users/auth-guard.service';

const routes: Routes = [
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
        component: ChatsPageComponent,
        // canActivate: [AuthGuardService]
    },
    {
        path: Route.CreateChatroomModal,
        component: CreateChatroomModalComponent,
        // canActivate: [AuthGuardService]
    },
    {
        path: Route.Home,
        component: HomeComponent,
        // canActivate: [AuthGuardService]
    },
    {
        path: Route.Chatroom,
        component: ChatroomComponent,
        // canActivate: [AuthGuardService]
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
