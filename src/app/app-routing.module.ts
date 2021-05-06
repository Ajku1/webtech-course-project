import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Route } from "./route.enum";

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
