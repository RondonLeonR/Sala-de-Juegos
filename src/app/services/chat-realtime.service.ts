import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mensaje } from '../clases/mensaje';



@Injectable({
  providedIn: 'root'
})
export class ChatRealtimeService {

  rutaDeLaColeccion = "/chatRealtime";
  rutaChatTateti = "/chatTateti";
  rutaChatPPT = "/chatPPT";
  rutaChatMemotest = "/chatMemotest";
  rutaJuegoMio = "/chatJuegoMio";


  referenciaAlaColeccion: AngularFireList<Mensaje>;
  referenciaAlaColeccionTateti: AngularFireList<Mensaje>;
  referenciaAlaColeccionPPT: AngularFireList<Mensaje>;
  referenciaAlaColeccionMemotest: AngularFireList<Mensaje>;
  referenciaAlaColeccionJuegoMio: AngularFireList<Mensaje>;

  constructor(private db: AngularFireDatabase) {
    this.referenciaAlaColeccion = db.list(this.rutaDeLaColeccion);
    this.referenciaAlaColeccionTateti = db.list(this.rutaChatTateti);
    this.referenciaAlaColeccionPPT = db.list(this.rutaChatPPT);
    this.referenciaAlaColeccionMemotest = db.list(this.rutaChatMemotest);
    this.referenciaAlaColeccionJuegoMio = db.list(this.rutaJuegoMio);

  }

  CrearUno(mensaje: Mensaje): any {
    return this.referenciaAlaColeccion.push(mensaje);
  }

  CrearUnoTateti(mensaje: Mensaje): any {
    return this.referenciaAlaColeccionTateti.push(mensaje);
  }

  CrearUnoPPT(mensaje: Mensaje): any {
    return this.referenciaAlaColeccionPPT.push(mensaje);
  }

  CrearUnoMemotest(mensaje: Mensaje): any {
    return this.referenciaAlaColeccionMemotest.push(mensaje);
  }

  CrearUnoJuegoMio(mensaje: Mensaje): any {
    return this.referenciaAlaColeccionJuegoMio.push(mensaje);
  }

  ObtenerTodos() : AngularFireList<Mensaje>{
    return this.referenciaAlaColeccion;
  }

  ObtenerTodosTateti() : AngularFireList<Mensaje>{
    return this.referenciaAlaColeccionTateti;
  }

  ObtenerTodosPPT() : AngularFireList<Mensaje>{
    return this.referenciaAlaColeccionPPT;
  }

  ObtenerTodosMemotest() : AngularFireList<Mensaje>{
    return this.referenciaAlaColeccionMemotest;
  }

  ObtenerTodosJuegoMio() : AngularFireList<Mensaje>{
    return this.referenciaAlaColeccionJuegoMio;
  }
}
