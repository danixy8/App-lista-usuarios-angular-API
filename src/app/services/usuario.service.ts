import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/products';
  token = '76451885b7c36a21dbd443c305673bcb6ee45ba0dcb6a24baa535945e8e8154d';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUsuario( id: number ): Observable<any>{
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
