import { Component, OnInit } from '@angular/core';
import {Scoresrpt} from '../../../clases/scoresrpt';

import {GameRptService} from '../../../services/game-rpt.service';


@Component({
  selector: 'app-piedra-papelo-tijera',
  templateUrl: './piedra-papelo-tijera.component.html',
  styleUrls: ['./piedra-papelo-tijera.component.css']
})
export class PiedraPapeloTijeraComponent implements OnInit {
  resultado: string;
  jugadaRealizada: string;
  puntosUser = 0;
  puntoPC = 0;

  lista = this.gameSv.GetAll().valueChanges();

  scoreNuevo : Scoresrpt;

  constructor(
    private gameSv : GameRptService
  ) { 
    this.scoreNuevo = new Scoresrpt();
  }

  ngOnInit(): void {
    this.resultado = 'Esperando...';
    this.jugadaRealizada = "(+10 Ganar) (-5 Perder) (+1 Empate)";
  }

  jugadaPC() {
    const eleccion = ['Roca', 'Papel', 'Tijera'];//piedra(r) , papel, tijeras
    const random = Math.floor(Math.random() * 3);
    return eleccion[random];
  }

  play(jugadaUser: string): void {
    const jugadaPC = this.jugadaPC();
    const jugadaPcUser = jugadaUser + jugadaPC;
    this.jugadaRealizada = jugadaUser + " VS " + jugadaPC;
    this.ganador(jugadaPcUser);
    console.log(`Jugadas realizadas: ${jugadaPcUser} ${this.scoreNuevo.score}`);
  }

  ganador(jugada) {
    switch (jugada) {
      //Win
      case 'PapelRoca':
      case 'TijeraPapel':
      case 'RocaTijera':
        {
          this.resultado = "Ganaste!!";
          this.puntosUser += 1;
          this.scoreNuevo.score +=10;
        }
        break;
      //Loss
      case 'PapelTijera':
      case 'TijeraRoca':
      case 'RocaPapel':
        {
          this.resultado = "Gano la PC";
          this.puntoPC += 1;
          this.scoreNuevo.score -= 5;
        }
        break;
      //Draw
      case 'PapelPapel':
      case 'TijeraTijera':
      case 'RocaRoca':
        {
          this.resultado = "Empate";
          this.scoreNuevo.score += 1;
        }
        break;
    }
  }

  tableroGanadores(): void {
    this.lista = this.gameSv.GetAll().valueChanges();


    console.log(this.lista);
  }

  guardarScore(){
    this.gameSv.AgregarScore(this.scoreNuevo);
    
  }
}
