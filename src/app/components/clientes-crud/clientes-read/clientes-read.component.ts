import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  clientes?: Cliente[];


  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(cliente =>{
      this.clientes = cliente;
      console.log(this.clientes);
    } );

  }


  delete(id:any){
    console.log(id);
    this.clienteService.delete(id).subscribe(
    ()=>{console.log(`ID ${id} Deletado`)},
    (err: any)=>{console.log(err)}
    )
  }

}
