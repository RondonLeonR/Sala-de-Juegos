import { Component, Input, OnInit } from '@angular/core';
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

  @Input() nombreChat = "Chat Global";
  @Input() app = "";


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

    
    
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    //console.log(this.token);
    this.TraerChats();
    if (this.token == null) {
      //this.router.navigateByUrl("/home");

    }
  }

  TraerChats(){
    this.mensaje.usuario = localStorage.getItem('token');
    
    if(this.app == 'tateti'){
      this.lista = this.miServicio.ObtenerTodosTateti().valueChanges();
    }
    else if(this.app == 'memotest'){
      this.lista = this.miServicio.ObtenerTodosMemotest().valueChanges();
    }
    else if(this.app == 'ppt'){
      this.lista = this.miServicio.ObtenerTodosPPT().valueChanges();
    }
  }


  Enviar() {
    this.mensaje.usuario = localStorage.getItem('token');
    if(this.app == 'tateti'){
      this.miServicio.CrearUnoTateti(this.mensaje).then(() => {
        console.log("Mensaje enviado Tateti!");
      });
    }
    else if(this.app == 'ppt'){
      this.miServicio.CrearUnoPPT(this.mensaje).then(() => {
        console.log("Mensaje enviado PPT!");
      });
    }
    else if(this.app == 'memotest'){
      this.miServicio.CrearUnoMemotest(this.mensaje).then(() => {
        console.log("Mensaje enviado Memotest!");
      });
    }
    
  }
}
