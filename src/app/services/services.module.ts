import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from './project.service';
import { UserService } from './user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProjectService, UserService]
})
export class ServicesModule { }
