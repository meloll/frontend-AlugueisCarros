import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import {MatCardModule} from'@angular/material/card';
import {MatButtonModule} from'@angular/material/button';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CarrosCrudComponent } from './components/carros-crud/carros-crud.component';
import { ClientesComponent } from './components/views/clientes/clientes.component';
import { CarrosComponent } from './components/views/carros/carros.component';
import { AlugueisComponent } from './components/views/alugueis/alugueis.component';
import { ClientesReadComponent } from './components/clientes-crud/clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './components/clientes-crud/clientes-create/clientes-create.component';
import { AlugueisCrudComponent } from './components/alugueis-crud/alugueis-crud.component';
import { CarrosCreateComponent } from './components/carros-crud/carros-create/carros-create.component';
import { CarrosReadComponent } from './components/carros-crud/carros-read/carros-read.component';
import { CarrosUpdateComponent } from './components/carros-crud/carros-update/carros-update.component';

import { DialogDeleteClienteComponent } from './components/clientes-crud/dialog-delete-cliente/dialog-delete-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClientesComponent,
    CarrosComponent,
    AlugueisComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    CarrosCrudComponent,
    AlugueisCrudComponent,
    CarrosCreateComponent,
    CarrosReadComponent,
    CarrosUpdateComponent,
    DialogDeleteClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
