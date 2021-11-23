import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Carro } from './carro.model';

@Injectable({
    providedIn: 'root'
  })
  export class CarroService {
    baseUrl = 'https://app-aluguelcarros.herokuapp.com/carros/ '; // coloquei uma "/" no final da url
    //baseUrl = 'http://localhost:8080/carros/'; 
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

    readById(id: string): Observable<Carro>{
      const url = `${this.baseUrl}${id}`// tirei a "/" do meio , pq ela estava colocando um espaço a mais por isso n achava a url da API, essa "/" foi parar na variavel baseUrl lá em cima
      console.log("url   "+url);
      return this.http.get<Carro>(url)
    }
  
    update(carro: Carro): Observable<Carro>{
      const url = `${this.baseUrl}${carro.id}`// tirei a "/" do meio , pq ela estava colocando um espaço a mais por isso n achava a url da API, essa "/" foi parar na variavel baseUrl
      return this.http.put<Carro>(url, carro)
    }

    delete(id: string): Observable<void>{
      console.log(`${this.baseUrl}${id}`)
      return this.http.delete<void>(`${this.baseUrl}${id}`);
    }
  }
  