import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userAux: Usuario;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.userAux = new Usuario();
  }

  ngOnInit(): void {
  }

  async onRegister() {

    this.auth.ShareOneForRegister(this.userAux).valueChanges().subscribe(result => {
      if (result.length == 0) {
        this.auth.Register(this.userAux);
        localStorage.setItem('token', this.userAux.email);
        //window.alert("Registered Successfully");
        //this.router.navigateByUrl("home");
        window.location.href = "/home";
      }
      else {
        //window.alert("Error! User already exists");
        this.alert('error', "Error en Email o Clave!");
      }
    });

    
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
