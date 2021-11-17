import { AluguelService } from './../aluguel.service';
import { Aluguel } from './../aluguel.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alugueis-read',
  templateUrl: './alugueis-read.component.html',
  styleUrls: ['./alugueis-read.component.css']
})
export class AlugueisReadComponent implements OnInit {

  alugueis!: Aluguel[];

  constructor(private aluguelService:AluguelService,router:Router) { }

  ngOnInit(): void {  
    this.aluguelService.read().subscribe(aluguel =>{
      this.alugueis = aluguel;
      console.log(this.alugueis)
    });

  }

  

}
