import { Router } from '@angular/router';
import { Aluguel } from './../aluguel.model';
import { CarroService } from './../../carros-crud/carro.service';
import { ClienteService } from './../../clientes-crud/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../../carros-crud/carro.model';
import { Cliente } from '../../clientes-crud/cliente.model';
import { AluguelService } from '../aluguel.service';

@Component({
  selector: 'app-alugueis-create',
  templateUrl: './alugueis-create.component.html',
  styleUrls: ['./alugueis-create.component.css']
})
export class AlugueisCreateComponent implements OnInit {

  constructor(private clienteService:ClienteService, private carroService:CarroService, private alugueisService:AluguelService, private router:Router) { }

  clientes!: Cliente[];
  carros!: Carro[];
  aluguel:Aluguel={
    dataSaida: null,
    dataEntrega: null,
    valor: 0,
    dia: 0,
    cliente: {
      id:0,
    },
    carro: {
      id:0,
    },
  };
 

  idCliente!:number;
  idCarro!:number;



  ngOnInit(): void {
    this.carroService.read().subscribe(carro =>{
      this.carros = carro;
      console.log(this.carros);
    } );
    this.clienteService.read().subscribe(cliente =>{
      this.clientes = cliente;
      console.log(this.clientes);
    } );
  }

  createAluguel():void{

    if(this.aluguel.dataEntrega!=null){
        this.aluguel.cliente.id = this.idCliente;
        this.aluguel.carro.id= this.idCarro;

        this.alugueisService.create(this.aluguel).subscribe(() =>{
          this.carroService.showMessage("Aluguel Cadastrado!")
          this.router.navigate(['alugueis']);

      } )}
    else{
      this.alugueisService.showMessage("Não foi possivel cadastrar esse aluguel!")
    }

  }

  cancel():void{
    this.router.navigate(['alugueis']);
  }

}
