import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  loading = false;
  data: any[] = [];
  isVisible = false;
  item: any = {};
  project: File[];

  constructor(private projectService: ProjectService, private toastr: ToastrService) {
    $('.dropify').dropify({
      messages: {
          'default': '',
          'replace': '',
          'remove':  'Eliminar',
          'error':   'Ooops, something wrong happended.'
      }
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe((res) => {
      if(res.ok){
        this.data = res.projects;
        this.loading = false;
      }
    });
    
  }

  showModal(): void {
    this.isVisible = true;
  }

  editItem(item: any): void {
    this.item = item;
    this.isVisible = true;
  }

  handleOk(): void {

  }

  deleteItem(item: any): void {
    
  }

  handleCancel(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleEdit(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handleDelete(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  validateFileExtension(file: File[], extensionValid: any[]): boolean {
    let isValid = 0;
    // Validar solo extensiones validas.
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < file.length; i++) {
      const extension = file[i].name.split('.');
      for (let index = 0; index < extensionValid.length; index++) {
        if (extension[extension.length - 1].toUpperCase() === extensionValid[index].toUpperCase()) {
          isValid++;
        }
      }
    }
    return isValid > 0;
  }

  // saveProject(): void {

  //   if(!this.item.name || !this.item.description || !this.item.createdAt){
  //     this.toastr.error('Todos los campos son obligatorios');
  //     return;
  //   }
  //    const project = {
  //      name: this.item.name,
  //      description: this.item.description,
  //      createdAt: this.item.createdAt,
  //      project: this.project[0] ? this.project[0] : ''
  //    }
      
      
  
  //    if(!this.validateFileExtension(this.project, ['png', 'jpg', 'jpeg'])){
  //      this.toastr.error('La imagen que intenta subir no tiene una extensión correcta (png, jpg ó jpeg).', 'Opps!');
  //      return;
  //    }
    
  //    this.projectService.sendProject(project).subscribe((res) => {
  //     if(res.ok){
  //       this.toastr.success(res.message);
  //       $('.dropify-clear').click();
  //       if ($('.dropify-wrapper').hasClass('has-error')) {
  //         $('.dropify-wrapper').removeClass('has-error');
  //       }
  
  //       this.name = '';
  //       this.description = '';
  //       this.date = null;
  //     }else {
  //       this.toastr.error(res.message);
  //     }
  //   });
  //  }
  

}
