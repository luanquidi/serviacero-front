import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  remember = false;
  email: string;
  password: string;

  constructor(
    private usuarioService: UserService,
    private router: Router,
    private alertService: ToastrService,
    private activateRouter: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') ? localStorage.getItem('email') : '';
    if (this.email.length) { this.remember = true; }
  }




  singIn(): void{
    if (!this.email && !this.password) { return; }
    const user = {
      email: this.email,
      password: this.password
    }
    this.usuarioService.login(user)
      .subscribe((respuesta: any) => {
        if (respuesta.token) {
          sessionStorage.setItem('token', respuesta.token);
          this.usuarioService.token = respuesta.token;
          this.router.navigateByUrl('/admin');
          this.alertService.success(respuesta.message);
        } else {
          this.alertService.error(respuesta.message);
        }
    }, error => {
      console.log(error);
    });


  }
}
