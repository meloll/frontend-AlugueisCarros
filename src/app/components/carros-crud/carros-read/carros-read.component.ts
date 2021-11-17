import { Router } from '@angular/router';
import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro.model';

@Component({
  selector: 'app-carros-read',
  templateUrl:'./carros-read.component.html',
  styleUrls: ['./carros-read.component.css']

})
export class CarrosReadComponent implements OnInit {

  carros?: Carro[];
  loading:boolean=true;

  constructor(private carroService:CarroService, private router: Router) { }

  ngOnInit(): void {
    this.carroService.read().subscribe(carro =>{
      this.carros = carro;
      console.log("Carros "+this.carros);
      this.loading=false;
    } );
  }

  paginaUpdate(): void{
      this.router.navigate(['/carros/update/'])
  }

  formataDinheiro(valor:any){
    valor = parseFloat(valor.toFixed(2))
    valor = valor.toString()
    valor = valor.replace(".",",")
    return valor;
  }

}
