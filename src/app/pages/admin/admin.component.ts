import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ToastrService } from 'ngx-toastr';

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

 constructor(private toastr: ToastrService) {
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
   if(!this.validateFileExtension(this.project, ['png', 'jpg', 'jpeg'])){
     this.toastr.error('La imagen que intenta subir no tiene una extensión correcta (png, jpg ó jpeg).', 'Opps!');
     return;
   }
   // To do enviar imagen
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
