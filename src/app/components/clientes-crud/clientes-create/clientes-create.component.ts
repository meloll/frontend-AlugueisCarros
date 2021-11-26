import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    nome:null,
    cpf:'',
    email:null,
    dataN:null,
    senha:null,
  }
  hide = true;


  constructor(private clienteService:ClienteService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  createCliente():void{
    if(this.cliente.cpf.length==11)
      this.clienteService.create(this.cliente).subscribe(() =>{
        this.clienteService.showMessage("Cliente Cadastrado!")
        this.router.navigate(['clientes']);

      } )
    else{
      this.clienteService.showMessage("Não foi possivel cadastrar esse cliente!")
    }
  }
  cancel():void{
    this.router.navigate(['clientes'])
  }

}
