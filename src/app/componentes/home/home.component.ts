import { WrappedNodeExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { isJSDocThisTag } from 'typescript';

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
    localStorage.removeItem('token');
    
    window.alert("Deslogeado. CAMBIAR!!!");
    window.location.reload();
    this.router.navigateByUrl("/home");
  }



}
