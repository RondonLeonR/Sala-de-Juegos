import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../../services/movie-api.service';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  ///Inicio Juego
  inicio = false;
  dificultad = false; 

  imgCarta = "https://image.tmdb.org/t/p/w500";
  imgBack = "../../../../assets/imagen/back.jpg";

  mensaje = "Algo";

  ///Obtener fotos
  contador = 0;
  infoPeliculas:any;
  img = [
        {id : 1, path:this.imgCarta, atras:this.imgBack,mostrar:false,clase:'carta'},
        {id : 2, path:this.imgCarta, atras:this.imgBack,mostrar:false,clase:'carta'},
        {id : 3, path:this.imgCarta, atras:this.imgBack,mostrar:false,clase:'carta'},
        {id : 4, path:this.imgCarta, atras:this.imgBack,mostrar:false,clase:'carta'},
        {id : 5, path:this.imgCarta, atras:this.imgBack,mostrar:false,clase:'carta'}
      ];



  imgDefault = "";



  constructor(
    private movieApi: MovieApiService
  ) { }

  ngOnInit(): void {
    this.movieApi.getMoviesImages().subscribe(data => {
      //console.log(data["results"][0]);
      this.infoPeliculas = data["results"];
    });
    //this.verArrays();
  }


  
  public CargarFotos(){
    for(let item of this.infoPeliculas){
      if(this.contador <5){
        this.img[this.contador].path = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
        this.contador++;
      }
    }
    this.inicio = true;
  }

  seleccionaDificultad(){

  }

  CartaSeleccionada(){

  }


  DarVueltaCarta(algo){

  }

  empezarJuego(){

  }


  cambiarDificultad(){

  }
}
