import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
