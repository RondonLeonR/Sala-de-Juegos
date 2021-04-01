import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rutaDeLaColeccion = "/usuarios";
  referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  Register(user: Usuario): any {
    return this.referenciaAlaColeccion.add({ ...user });
  }

  GetAll(): AngularFirestoreCollection<Usuario> {
    try {
      return this.referenciaAlaColeccion;
    } catch (error) {
      window.alert(error);
    }
  }

  ShareOne(user: Usuario) {
    const found = this.bd.collection(this.rutaDeLaColeccion, ref =>
      ref.where("email", "==", user.email).where("pass", "==", user.pass));
    return found;
  }

  ShareOneForRegister(user: Usuario) {
    const found = this.bd.collection(this.rutaDeLaColeccion, ref =>
      ref.where("email", "==", user.email));
    return found;
  }

}
