import { AlugueisComponent } from './components/views/alugueis/alugueis.component';
import { CarrosComponent } from './components/views/carros/carros.component';
import { ClientesComponent } from './components/views/clientes/clientes.component';
import { HomeComponent } from './components/views/home/home.component';
import { ClientesCreateComponent } from './components/clientes-crud/clientes-create/clientes-create.component';
import { CarrosCreateComponent } from './components/carros-crud/carros-create/carros-create.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "carros", component: CarrosComponent},
  {path: "alugueis", component: AlugueisComponent},
  {path: "clientes/create", component:ClientesCreateComponent},
  {path: "carros/create", component: CarrosCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
