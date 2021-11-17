import { AlugueisCreateComponent } from './components/alugueis-crud/alugueis-create/alugueis-create.component';
import { CarrosUpdateComponent } from './components/carros-crud/carros-update/carros-update.component';
import { AlugueisComponent } from './components/views/alugueis/alugueis.component';
import { CarrosComponent } from './components/views/carros/carros.component';
import { ClientesComponent } from './components/views/clientes/clientes.component';
import { HomeComponent } from './components/views/home/home.component';
import { ClientesCreateComponent } from './components/clientes-crud/clientes-create/clientes-create.component';
import { CarrosCreateComponent } from './components/carros-crud/carros-create/carros-create.component';
import { ClientesUpdateComponent } from './components/clientes-crud/clientes-update/clientes-update.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "carros", component: CarrosComponent},
  {path: "alugueis", component: AlugueisComponent},
  {path: "clientes/create", component:ClientesCreateComponent},
  {path: "carros/create", component: CarrosCreateComponent},
  {path: "carros/update/:id", component: CarrosUpdateComponent},//Forma "correta"
  {path: "clientes/update/:id", component: ClientesUpdateComponent},
  {path: "alugueis/create", component:AlugueisCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
