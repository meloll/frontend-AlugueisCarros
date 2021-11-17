import { Aluguel } from './../aluguel.model';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../../carros-crud/carro.model';
import { Cliente } from '../../clientes-crud/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../clientes-crud/cliente.service';
import { CarroService } from '../../carros-crud/carro.service';
import { AluguelService } from '../aluguel.service';

@Component({
  selector: 'app-alugueis-update',
  templateUrl: './alugueis-update.component.html',
  styleUrls: [ 'alugueis-update.component.css']
})
export class AlugueisUpdateComponent implements OnInit {

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

  constructor(private route:ActivatedRoute ,private clienteService:ClienteService, private carroService:CarroService, private alugueisService:AluguelService, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')||"";
    console.log(id);
    this.alugueisService.readById(id).subscribe(aluguel =>{
      console.log(aluguel);
      this.aluguel=aluguel;
    })
    this.carroService.read().subscribe(carro =>{
      this.carros = carro;
      console.log(this.carros);
    } );
    this.clienteService.read().subscribe(cliente =>{
      this.clientes = cliente;
      console.log(this.clientes);
    } );
    
  }

  updateAlugueis():void{
    this.alugueisService.update(this.aluguel).subscribe(()=>{
      this.alugueisService.showMessage("Dados do Aluguel Alterados");
      this.router.navigate(["/alugueis"]);
    })
  }

  cancel():void {
    this.router.navigate(["/alugueis"])
  }

}
