import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselProjectsComponent } from './carrousel-projects/carrousel-projects.component';
import { CarrouselProjectsOwlComponent } from './carrousel-projects-owl/carrousel-projects-owl.component';



@NgModule({
  declarations: [CarrouselProjectsComponent, CarrouselProjectsOwlComponent],
  imports: [
    CommonModule
  ],
  exports: [CarrouselProjectsComponent, CarrouselProjectsOwlComponent]
})
export class ComponentsModule { }
