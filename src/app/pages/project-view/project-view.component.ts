import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import * as moment from 'moment';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  item: any;
  constructor(private router: Router, private projectService: ProjectService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.projectService.getProject(params.id).subscribe((res) => {
          // console.log(res);
          if(res.ok) {
            this.item = res.project;
          }
        });
      }
    );
  }

  dateProject(date: any): any {
    moment.locale('es');
    return moment(date.createdAt).format('dddd Do MMMM YYYY');
  }

}
