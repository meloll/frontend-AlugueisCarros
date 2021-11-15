import { CarroService } from './../carro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from './../carro.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-carros-update',
  templateUrl: './carros-update.component.html',
  styleUrls: ['./carros-update.component.css' ]
})
export class CarrosUpdateComponent implements OnInit {

  carro: Carro = {};
  id: any;
  constructor(
    private carroService: CarroService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("value "+this.id);
    this.id = this.route.snapshot.params['id'];
    console.log("value "+this.id);
    this.carroService.readById(this.id).subscribe(carro => {
      console.log("value "+this.id);  
      this.carro = carro;
    })
  }

  updateCarro(): void{
    this.carroService.update(this.carro).subscribe(() => {
      this.carroService.showMessage("Atualicado com sucesso!");
      this.router.navigate(['/carros']);
    })
  }

  cancel(): void{
    this.router.navigate(['/carros']);
  }

}
