import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from '../carro.model';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros-create',
  templateUrl: './carros-create.component.html',
  styleUrls: [ './carros-create.component.css' ]
                  
})
export class CarrosCreateComponent implements OnInit {

carro: Carro={
  marca: '',
  placa: '',
  preco: null,
  cor: ''
}

  constructor(private carroService:CarroService, private router:Router) { }

  ngOnInit(): void {
  }

  createCarro():void{
    this.carroService.create(this.carro).subscribe(() =>{
       this.carroService.showMessage("Carro Cadastrado!")
       this.router.navigate(['carros']);

    } )
  }
  cancel():void{
    this.router.navigate(['carros'])
  }

}
