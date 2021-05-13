import { Component, OnInit } from '@angular/core';
import { InfoGitService } from '../../services/info-git.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  public gitPerfil : any;

  constructor(private perfil: InfoGitService) { }

  ngOnInit(): void {
    this.myProfileGit();
  }

  public myProfileGit(){
    this.perfil.getProfileGitHub().subscribe((data)=>{
      this.gitPerfil = data;
    });
  }

}
