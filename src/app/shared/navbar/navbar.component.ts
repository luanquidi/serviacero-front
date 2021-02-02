import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section: string): void {
    $('html, body').animate({scrollTop:$(`#${section}`).position().top - 110}, 'slow');
  }

}
