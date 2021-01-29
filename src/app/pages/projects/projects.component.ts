import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import Swal from 'sweetalert2';

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
  p: number = 1;

  constructor(private projectService: ProjectService, private toastr: ToastrService) {
    
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
    // console.log(item);
    this.item.createdAt = moment(this.item.createdAt).format();
    this.isVisible = true;

    setTimeout(() => {
      console.log('ok');
      $('.dropifys').dropify({
        messages: {
            'default': '',
            'replace': '',
            'remove':  'Eliminar',
            'error':   'Ooops, something wrong happended.'
        }
      });
    }, 100);
    
  }

  handleOk(item: any): void {
    this.editProject(item);
  }

  deleteItem(item: any): void {
    Swal.fire({
      title: '¿Desea eliminar este proyecto?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si, eliminar`,
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.projectService.deleteProject(item._id).subscribe((res) => {
          if(res.ok) {
            this.toastr.success(res.message);
            let array: any = this.data.filter((items, index) => {
              return item._id != items._id;
            });
            this.data = array;
          }else {
            this.toastr.error(res.message);
          }
        });
      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
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

  dateProject(date: any): any {
    moment.locale('es');
    return moment(date.createdAt).format('dddd Do MMMM YYYY');
  }

  editProject(item: any): void {
    if(!item.name || !item.description || !item.createdAt){
      this.toastr.error('Todos los campos son obligatorios');
      return;
    }
     const project = {
       id : item._id,
       name: item.name,
       description: item.description,
       createdAt: item.createdAt,
       project: this.project ? this.project[0] : null
     }

     if (item.project) {
      if(!this.validateFileExtension(this.project, ['png', 'jpg', 'jpeg'])){
        this.toastr.error('La imagen que intenta subir no tiene una extensión correcta (png, jpg ó jpeg).', 'Opps!');
        return;
      }
     }

     this.projectService.editProject(project).subscribe((res) => {
      if(res.ok){
        this.toastr.success(res.message);
        this.project = null;
        $('.dropify-clear').click();
        if ($('.dropify-wrapper').hasClass('has-error')) {
          $('.dropify-wrapper').removeClass('has-error');
        }
  
      }else {
        this.toastr.error(res.message);
      }
    });
   }

}
