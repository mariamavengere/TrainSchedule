import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { 
    path: 'login', component: LoginComponent 
  },
  {
     path: 'admin', component: AdminPortalComponent 
     //canActivate: [AuthGuard]
  },
  {  
    path: 'home', component: HomeComponent 
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
