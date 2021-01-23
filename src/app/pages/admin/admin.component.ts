import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../services/project.service';

declare var $;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  size: NzButtonSize = 'large';
  project: File[];
  value?: string;
  date = null;
  isEnglish = false;
  name: string;
  description: string;


 constructor(private toastr: ToastrService, private projectService: ProjectService) {
  // this.toastr.success('Hello world!', 'Toastr fun!');
 }
 ngOnInit(): void {
  $('.dropify').dropify({
    messages: {
        'default': '',
        'replace': '',
        'remove':  'Eliminar',
        'error':   'Ooops, something wrong happended.'
    }
  });
  
 }

 saveProject(): void {

  if(!this.name || !this.description || !this.date || !this.project){
    this.toastr.error('Todos los campos son obligatorios');
    return;
  }
   const project = {
     name: this.name,
     description: this.description,
     createdAt: this.date,
     project: this.project[0]
   }
    
    

   if(!this.validateFileExtension(this.project, ['png', 'jpg', 'jpeg'])){
     this.toastr.error('La imagen que intenta subir no tiene una extensión correcta (png, jpg ó jpeg).', 'Opps!');
     return;
   }
  
   this.projectService.sendProject(project).subscribe((res) => {
    if(res.ok){
      this.toastr.success(res.message);
      $('.dropify-clear').click();
      if ($('.dropify-wrapper').hasClass('has-error')) {
        $('.dropify-wrapper').removeClass('has-error');
      }

      this.name = '';
      this.description = '';
      this.date = null;
    }else {
      this.toastr.error(res.message);
    }
  });
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


}
