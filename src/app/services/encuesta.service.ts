import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Preguntas } from '../clases/preguntas';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  rutaDeLaColeccion = "/encuesta";
  referenciaAlaColeccion: AngularFirestoreCollection<Preguntas>;  


  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  public AgregarRespuesta(respuesta: Preguntas): any {
    return this.referenciaAlaColeccion.add({ ...respuesta });
  }
}
