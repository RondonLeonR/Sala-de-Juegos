import { Component, OnInit } from '@angular/core';
import { ChatRealtimeService } from 'src/app/services/chat-realtime.service';
import { Mensaje } from 'src/app/clases/mensaje';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  token: any;
  mensaje: Mensaje;
  lista: Observable<any[]>;
  date = new Date();

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(
    private router: Router,
    private miServicio: ChatRealtimeService
  ) {
    this.mensaje = new Mensaje();
    this.mensaje.usuario = localStorage.getItem('token');
    this.mensaje.hora = this.date.getHours() + ':' + this.date.getMinutes();

    this.lista = miServicio.ObtenerTodos().valueChanges();


  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    console.log(this.token);

    if (this.token == null) {
      //this.router.navigateByUrl("/home");

    }
  }

  Enviar() {
    this.mensaje.usuario = localStorage.getItem('token');
    this.miServicio.CrearUno(this.mensaje).then(() => {
      console.log("Mensaje enviado!");
    });
  }
}
