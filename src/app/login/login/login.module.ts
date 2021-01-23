import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzButtonModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
