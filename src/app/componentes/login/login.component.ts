import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userAux: Usuario;


  constructor(
    private auth: AuthService,
    private router: Router,

  ) {
    this.userAux = new Usuario();
  }


  ngOnInit(): void {
  }

  public onLogin() {

    this.auth.ShareOne(this.userAux).valueChanges().subscribe(result => {
      if (result.length == 1) {
        console.log("Logeado!");
        localStorage.setItem('token', this.userAux.email);

        //this.alert('success', "Logeado Correctamente!");
        //this.router.navigateByUrl("/home");
        window.location.href = "/home";

      }
      else {
        //window.alert("Error! Wrong email or password");
        this.alert('error', "Email o Clave equivocados!");
      }
    });
  }

  loginRapido(){
    this.userAux.email = "ingreso@rapido.com";
    this.userAux.pass = "123";

    this.onLogin();
  }


  alert(icon: SweetAlertIcon, text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })



    Toast.fire({
      icon: icon,
      title: text
    })
  }

}
