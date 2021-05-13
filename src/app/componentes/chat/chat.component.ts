import { Component, ViewChild, ViewChildren, Input, OnInit ,ElementRef,QueryList  } from '@angular/core';
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

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;

  private scrollContainer: any;

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
    //this.ngAfterViewInit();
    if (this.token == null) {
      //this.router.navigateByUrl("/home");
    } 
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;  
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    
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
    
    this.mensaje.mensaje= "";
    this.mensaje.hora = "";
    this.mensaje.usuario = "";
    this.mensaje.id = null;
  }

  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }


  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
