import { WrappedNodeExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(this.token == null)
    {
      window.alert("Login pls!");
      this.router.navigateByUrl("login");
    }
  }

  logOut()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("login");
  }

}
