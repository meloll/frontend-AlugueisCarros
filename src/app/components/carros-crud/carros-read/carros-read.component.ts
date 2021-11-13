import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro.model';

@Component({
  selector: 'app-carros-read',
  templateUrl:'./carros-read.component.html',
  styleUrls: ['./carros-read.component.css']

})
export class CarrosReadComponent implements OnInit {

  carros?: Carro[];

  constructor(private carroService:CarroService) { }

  ngOnInit(): void {
    this.carroService.read().subscribe(carro =>{
      this.carros = carro;
      console.log(this.carros);
    } );
  }

}
