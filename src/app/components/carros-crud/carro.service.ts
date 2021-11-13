import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Carro } from './carro.model';

@Injectable({
    providedIn: 'root'
  })
  export class CarroService {
    baseUrl = 'https://app-aluguelcarros.herokuapp.com/carros ';
    
    constructor(private snackBar: MatSnackBar ,private http:HttpClient) { }
  
    showMessage(msg: string):void{
      this.snackBar.open(msg,'X',{
        duration: 3000,
        horizontalPosition:"center",
        verticalPosition: "top"
      })
    }
  
  
    read():Observable<Carro[]>{
      return this.http.get<Carro[]>(this.baseUrl);
    }
    create(carro: Carro):Observable<Carro>{
      return this.http.post<Carro>(this.baseUrl,carro);
    }
  
  }
  