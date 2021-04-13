import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Scoresrpt } from '../clases/scoresrpt';

@Injectable({
  providedIn: 'root'
})
export class GameRptService {

  rutaDeLaColeccion = "/scores";
  referenciaAlaColeccion: AngularFirestoreCollection<Scoresrpt>;
  referenciaOrdenada: AngularFirestoreCollection<Scoresrpt>;


  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaOrdenada = bd.collection<Scoresrpt>('scores', ref => ref.orderBy('score', 'desc'));
  }

  AgregarScore(score: Scoresrpt): any {
    return this.referenciaAlaColeccion.add({ ...score });
  }

  GetAll(): AngularFirestoreCollection<Scoresrpt> {
    return this.referenciaOrdenada;
  }

}
