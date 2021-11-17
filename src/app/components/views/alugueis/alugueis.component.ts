import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-alugueis',
    templateUrl: './alugueis.component.html',
    styleUrls: ['./alugueis.component.css']
  })

export class AlugueisComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToAlugueisCreate():void{
    this.router.navigate(['alugueis/create'])

    

  }

}
