import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  public token : any;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}
