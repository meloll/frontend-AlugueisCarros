import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteCarroComponent } from './../dialog-delete-carro/dialog-delete-carro.component';
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

  carros!: Carro[];
  loading:boolean=true;
  public paginaAtual = 1;

  constructor(private carroService:CarroService, private router: Router, public dialog: MatDialog) { }

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


  delete(id:any){
    console.log(id);
    this.carroService.delete(id).subscribe(() => {
      console.log(`ID ${id} Deletado com sucesso!`);
      location.reload();
      this.carroService.showMessage("Carro excluído com sucesso!")
    },
    (err:any) => {console.log(err);
      this.carroService.showMessage("Não foi possível excluir, o carro ainda está nos registros de aluguéis!")})
  }

  openDialog(id: any){
    const dialogRef = this.dialog.open(DialogDeleteCarroComponent);

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        console.log("Carro deletado!")
        this.delete(id);
      }
      else{
        console.log("Cancelado!")
      }
    })

  }
}
