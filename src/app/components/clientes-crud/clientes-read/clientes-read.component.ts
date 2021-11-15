import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteClienteComponent } from '../dialog-delete-cliente/dialog-delete-cliente.component';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  clientes!: Cliente[];
  confirmDelete:boolean=false


  constructor(private clienteService: ClienteService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(cliente =>{
      this.clientes = cliente;
      console.log(this.clientes);
    } );

  }


  delete(id:any){
    console.log(id);
    this.clienteService.delete(id).subscribe(
    ()=>{
        console.log(`ID ${id} Deletado`);
        location.reload();
        this.clienteService.showMessage("Cliente Deletado!")
        },
    (err: any)=>{console.log(err);
      this.clienteService.showMessage("Não foi possivel excluir, cliente ainda está registrado em aluguéis!")
        }
    )
  }

  openDialog(id:any) {
    const dialogRef = this.dialog.open(DialogDeleteClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("Deletado!")
        this.delete(id);
      }
      else{
        console.log("Cancelado!")
      }
    });
  }



  

}


