import { AlugueisComponent } from './components/views/alugueis/alugueis.component';
import { CarrosComponent } from './components/views/carros/carros.component';
import { ClientesComponent } from './components/views/clientes/clientes.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "carros", component: CarrosComponent},
  {path: "alugueis", component: AlugueisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
