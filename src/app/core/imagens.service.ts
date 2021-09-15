import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagem } from '../shared/models/imagem';

@Injectable({
  providedIn: 'root'
})
export class ImagensService {

  baseUrl = 'https://picsum.photos/';

  constructor(private http: HttpClient) { }

  receberImagem(pagina: number, qtdPagina: number): Observable<Imagem[]>{
    let httpParams = new HttpParams();
    httpParams = httpParams.set('page', pagina.toString())
    httpParams = httpParams.set('limit', qtdPagina.toString());
    return this.http.get<Imagem[]>(`${this.baseUrl}v2/list?`,{params: httpParams})
  }

  receberImagemPorId(id: number): Observable<Imagem>{
    const url =  `${this.baseUrl}/id/${id}/info`
    return this.http.get<Imagem>(url)
  }
}
