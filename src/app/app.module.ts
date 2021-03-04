import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { ListaComponent } from './lista/lista.component';
import { LetrasPipe } from './letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    ListaComponent,
    LetrasPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
