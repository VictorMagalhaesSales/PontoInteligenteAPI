import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// MINHAS CLASSES
import { LoginModule, LoginRoutingModule,  CadastroPjModule, CadastroPjRoutingModule, CadastroPfModule, CadastroPfRoutingModule } from './autenticacao';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CadastroPjModule,
    CadastroPfModule,

    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,

    LoginRoutingModule,
    CadastroPjRoutingModule,
    CadastroPfRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }