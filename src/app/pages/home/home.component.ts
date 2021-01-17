import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSmallDevice: boolean = false;
  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.checkWidth();
    window.addEventListener('resize', () => {
      this.checkWidth();
    })
    
  }

  checkWidth(): void {
    if(window.innerWidth < 984) {
      this.isSmallDevice = false;
    }else {
      this.isSmallDevice = true;
    }
  }

}
