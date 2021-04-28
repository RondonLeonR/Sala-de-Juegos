import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

import { AngularFireModule } from '@angular/fire/';

import { environment } from 'src/environments/environment';
import { RegisterComponent } from './componentes/register/register.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { PiedraPapeloTijeraComponent } from './componentes/juegos/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { MemotestComponent } from './componentes/juegos/memotest/memotest.component';


//API
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegisterComponent,
    TatetiComponent,
    ChatComponent,
    JuegosComponent,
    PiedraPapeloTijeraComponent,
    MemotestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
