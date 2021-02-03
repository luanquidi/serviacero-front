import { Component, Input, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-carrousel-projects-owl',
  templateUrl: './carrousel-projects-owl.component.html',
  styleUrls: ['./carrousel-projects-owl.component.scss']
})
export class CarrouselProjectsOwlComponent implements OnInit {
  @Input() images: any[];
  isVisible = false;
  imageItem: any;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
      });
    }, 100);
    
  }

  show(item: any): void {
    this.imageItem = item;
    this.isVisible = true;
  }

  handleOk(): void {
    // this.editProject(item);
  }

  handleCancel(): void {
    // this.editProject(item);
    this.isVisible = false;
  }

}
