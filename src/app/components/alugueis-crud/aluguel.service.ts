import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aluguel } from './aluguel.model';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {
  baseUrl = 'http://app-aluguelcarros.herokuapp.com/alugueis/';
  //baseUrl = 'http://localhost:8080/alugueis/ ';


  constructor(private snackBar: MatSnackBar,private http:HttpClient) { }
  
  
  showMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration: 8000,
      horizontalPosition:"center",
      verticalPosition: "top"
    })
  }

  read():Observable<Aluguel[]>{
    return this.http.get<Aluguel[]>(this.baseUrl);
  }

  create(aluguel:Aluguel):Observable<Aluguel>{
    return this.http.post<Aluguel>(this.baseUrl,aluguel);
  }

  delete(id:string): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}${id}`)
  }

  update(aluguel:Aluguel): Observable<Aluguel>{
    return this.http.put<Aluguel>(`${this.baseUrl}${aluguel.id}`,aluguel);
  }

  readById(id:string): Observable<Aluguel>{
    return this.http.get<Aluguel>(`${this.baseUrl}${id}`);
  }




}
