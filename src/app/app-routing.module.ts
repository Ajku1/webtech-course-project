import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateChatroomModalComponent } from './create-chatroom-modal/create-chatroom-modal.component';
import { Route } from "./route.enum";

const routes: Routes = [
  {
    path: Route.CreateChatroomModal,
    component: CreateChatroomModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
