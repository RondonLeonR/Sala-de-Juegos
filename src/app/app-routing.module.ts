import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/componentes/login/login.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MemotestComponent } from './componentes/juegos/memotest/memotest.component';
import { PiedraPapeloTijeraComponent } from './componentes/juegos/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'tateti', component: TatetiComponent
  },
  {
    path: 'piedrapapelotijera', component: PiedraPapeloTijeraComponent
  },
  {
    path: 'chat', component: ChatComponent
  },
  {
    path: 'juegos', component: JuegosComponent
  },
  {
    path: 'quiensoy', component: QuienSoyComponent
  },
  {
    path: 'memotest', component: MemotestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
