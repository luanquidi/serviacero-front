import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  validateForm!: FormGroup;
  correo: any = {};

  constructor(private projectsService: ProjectService, private fb: FormBuilder, private tost: ToastrService) { }

  ngOnInit(): void {
    this.loadProjects()
    this.checkWidth();
    window.addEventListener('resize', () => {
      this.checkWidth();
    });
    this.validateForm = this.fb.group({
      mail: [null, [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      cel: [null, [Validators.required]],
      asunto: [null, [Validators.required]],
      mensaje: [null, [Validators.required]]
    });
    
  }
  
  submitForm(): void {
    
  }
  genderChange(value: string): void {
    this.validateForm.get('note')!.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
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
              autoplayTimeout: 5000,
              smartSpeed: 2000,
              animateIn: true
          });
      });
      }
    });
  }

  sendCorreo(): void {
    if (!this.validateForm.invalid) {
      this.projectsService.insertCorreo(this.correo).subscribe((res) => {
        if(res.ok){
          this.tost.success(res.message);
        }else {
          this.tost.error(res.message);
        }
        this.correo = {};
        this.validateForm.reset();
      });
    }else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    
  }

}
