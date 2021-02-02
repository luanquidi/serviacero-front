import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-projects',
  templateUrl: './carrousel-projects.component.html',
  styleUrls: ['./carrousel-projects.component.scss']
})
export class CarrouselProjectsComponent implements OnInit {
  @Input() images: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
