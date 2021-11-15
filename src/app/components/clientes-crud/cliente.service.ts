import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl = 'http://app-aluguelcarros.herokuapp.com/clientes/ ';
  //baseUrl = 'http://localhost:8080/clientes/ ';
  constructor(private snackBar: MatSnackBar ,private http:HttpClient) { }

  showMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration: 8000,
      horizontalPosition:"center",
      verticalPosition: "top"
    })
  }


  read():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl);
  }
  create(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl,cliente);
  }

  delete(id: string): Observable<void>{
    console.log(`${this.baseUrl}${id}`)
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }

  readById(id:string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}${id}`)
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.baseUrl}${cliente.id}`,cliente)
  }

}
