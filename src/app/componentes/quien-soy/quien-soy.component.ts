import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  token = "Nadie aun";

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}
