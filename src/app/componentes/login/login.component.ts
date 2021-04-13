import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



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
        console.log("Found!");
        localStorage.setItem('token', this.userAux.email);
        window.location.href="/home"
        //this.router.navigateByUrl("/home");
      }
      else {
        window.alert("Error! Wrong email or password");
      }
    });
  }
}
