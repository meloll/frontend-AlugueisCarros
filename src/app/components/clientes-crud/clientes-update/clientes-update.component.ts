import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-update',
  templateUrl:'clientes-update.component.html',
  styleUrls:['clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {

  cliente!: Cliente;
  /*cliente: Cliente={
    nome:'',
    cpf:'',
    email:'',
    dataN:null,
    senha:''
  };*/
  hide=true;

  constructor(private router:Router,private clienteService:ClienteService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')||"";
    console.log(id)
    this.clienteService.readById(id).subscribe(cliente =>{
      console.log(cliente)
      this.cliente=cliente;
    })
  }

  updateCliente():void{
      this.clienteService.update(this.cliente).subscribe(()=>{
        this.clienteService.showMessage("Dados do Cliente Alterado!")
        this.router.navigate(["/clientes"])
      })
  }

  cancel():void{
      this.router.navigate(["/clientes"])
  }

}
