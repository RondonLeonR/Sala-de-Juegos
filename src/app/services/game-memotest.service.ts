import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Scoresrpt } from '../clases/scoresrpt';

@Injectable({
  providedIn: 'root'
})
export class GameMemotestService {

  rutaDeLaColeccion = "/scoresMemotest";
  referenciaAlaColeccion: AngularFirestoreCollection<Scoresrpt>;
  referenciaOrdenada: AngularFirestoreCollection<Scoresrpt>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaOrdenada = bd.collection<Scoresrpt>('scoresMemotest', ref => ref.orderBy('score', 'asc'));
  }

  
  AgregarScore(score: Scoresrpt): any {
    return this.referenciaAlaColeccion.add({ ...score });
  }

  GetAll(): AngularFirestoreCollection<Scoresrpt> {
    return this.referenciaOrdenada;
  }
}
