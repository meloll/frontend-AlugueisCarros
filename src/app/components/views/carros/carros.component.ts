import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-carros',
    templateUrl: './carros.component.html',
    styleUrls: ['./carros.component.css']
  })
export class CarrosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToCarroCreate():void{
    this.router.navigate(['carros/create'])
  }
}
