import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoGitService {

  github: any[] = [];
  //rutaDeLaColeccion = '/usuarios';
  //referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;
  //referenciaBd: AngularFirestore;

  constructor(private http: HttpClient) { 
    //this.referenciaBd = bd;
    //this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  public getProfileGitHub(){
    return this.http.get('https://api.github.com/users/RondonLeonR')
  }

  public getAll() {
    return this.github;
  }
}
