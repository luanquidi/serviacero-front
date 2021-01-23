import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSmallDevice: boolean = false;
  data: any[] = [];
  projects: any[];

  constructor(private projectsService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects()
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

  loadProjects(): void{
    this.projectsService.getProjects().subscribe((res) => {
      if(res.ok){
        this.projects = res.projects
        $(document).ready(function() {
          $('.owl-carousel').owlCarousel({
              loop: true,
              autoplay: true,
              autoplayTimeout: 1000
          });
      });
      }
    });
  }

}
