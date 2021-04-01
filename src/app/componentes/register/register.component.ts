import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

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
        window.alert("Registered Successfully");
        this.router.navigateByUrl("home");
      }
      else {
        window.alert("Error! User already exists");
      }
    });

  }
}
