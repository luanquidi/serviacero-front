import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: any[];
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void{
    this.projectService.getProjects().subscribe((res) => {
      if(res.ok){
        this.projects = res.projects
      }
    });
  }

  dateProject(date: any): any {
    moment.locale('es');
    return moment(date.createdAt).format('dddd Do MMMM YYYY');
  }

  navigate(id: any): void {
    console.log(id);
    this.router.navigate([`/project/${id}`]);
  }

}
