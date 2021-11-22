import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluguel } from '../../alugueis-crud/aluguel.model';
import { AluguelService } from '../../alugueis-crud/aluguel.service';
import { DialogueDeleteAlugueisComponent } from '../../alugueis-crud/dialogue-delete-alugueis/dialogue-delete-alugueis.component';

@Component({
  selector: 'app-alugueis-read-unico',
  templateUrl: 'alugueis-read-unico.component.html',
  styleUrls: ['alugueis-read-unico.component.css']
})
export class AlugueisReadUnicoComponent implements OnInit {

  id:any;
  alugueis!: Aluguel[];
  aluguiesCliente:Aluguel[]=[];
  loading:boolean=true;

  constructor(private route:ActivatedRoute,private aluguelService:AluguelService,router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')||"";
    this.aluguelService.read().subscribe(aluguel =>{
      this.alugueis = aluguel;
      this.alugueis.forEach(aluguel =>{
        if(aluguel.cliente.id==this.id){
          this.aluguiesCliente.push(aluguel);
        }
      })
      this.loading=false;
      console.log(this.aluguiesCliente);
      console.log(this.alugueis);
      if(this.aluguiesCliente.length==0){
        this.aluguelService.showMessage("O cliente não tem nenhum registro!")
      }
      
      
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
