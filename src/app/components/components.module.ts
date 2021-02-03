import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselProjectsComponent } from './carrousel-projects/carrousel-projects.component';
import { CarrouselProjectsOwlComponent } from './carrousel-projects-owl/carrousel-projects-owl.component';
import { NzModalModule } from 'ng-zorro-antd/modal';



@NgModule({
  declarations: [CarrouselProjectsComponent, CarrouselProjectsOwlComponent],
  imports: [
    CommonModule,
    NzModalModule
  ],
  exports: [CarrouselProjectsComponent, CarrouselProjectsOwlComponent]
})
export class ComponentsModule { }
