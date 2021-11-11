import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {
  
  cliente: Cliente={
    nome:'',
    cpf:'',
    email:'',
    dataN:null,
    senha:''
  };


  constructor(private clienteService:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }


  createCliente():void{
    this.clienteService.create(this.cliente).subscribe(() =>{
       this.clienteService.showMessage("Cliente Cadastrado!")
       this.router.navigate(['clientes']);

    } )
  }
  cancel():void{
    this.router.navigate(['clientes'])
  }

}
