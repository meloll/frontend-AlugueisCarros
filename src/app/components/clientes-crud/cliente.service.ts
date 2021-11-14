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
  
  constructor(private snackBar: MatSnackBar ,private http:HttpClient) { }

  showMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
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
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }

}
