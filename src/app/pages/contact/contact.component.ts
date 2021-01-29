import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loading = false;
  data: any = [];
  p: number = 1;

  constructor(private projectService: ProjectService){}
  ngOnInit(): void {
    this.projectService.getContacts().subscribe((res) => {
      if(res.ok){
        console.log(res);
        this.data = res.contacts;
      }

    })
  }

}
