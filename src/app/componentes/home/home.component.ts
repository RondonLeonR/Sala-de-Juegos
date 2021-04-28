import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tokenhome: any;

  public flag: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.tokenhome = localStorage.getItem('token');
    if (this.tokenhome == null) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }
  }

  logOut() {
    //this.alert();
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigateByUrl("/home");

  }

  alert() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: 'Log out!'
    })
  }


}
