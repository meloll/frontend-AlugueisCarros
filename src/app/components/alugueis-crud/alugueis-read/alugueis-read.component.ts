import { AluguelService } from './../aluguel.service';
import { Aluguel } from './../aluguel.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogueDeleteAlugueisComponent } from '../dialogue-delete-alugueis/dialogue-delete-alugueis.component';


@Component({
  selector: 'app-alugueis-read',
  templateUrl: './alugueis-read.component.html',
  styleUrls: ['./alugueis-read.component.css']
})
export class AlugueisReadComponent implements OnInit {

  alugueis!: Aluguel[];
  loading:boolean=true;
  filter:any;
  alugueisfilter!:Aluguel[];
  public paginaAtual = 1;

  constructor(private aluguelService:AluguelService,router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {  
    this.aluguelService.read().subscribe(aluguel =>{
      this.alugueis = aluguel;
      console.log(this.alugueis)
      this.loading=false;
    });

  }
  delete(id:any){
    console.log(id);
    this.aluguelService.delete(id).subscribe(
    ()=>{
        console.log(`ID ${id} Deletado`);
        location.reload();
        
        },
    (err: any)=>{console.log(err);
      this.aluguelService.showMessage("Não foi possivel excluir, cliente ainda está registrado em aluguéis!")
        }
    )
    this.aluguelService.showMessage("Aluguel Deletado!")
  }


  openDialog(id:any) {
    const dialogRef = this.dialog.open(DialogueDeleteAlugueisComponent);

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
