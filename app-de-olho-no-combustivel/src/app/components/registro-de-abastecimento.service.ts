import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistroAbastecimento } from './registroDeAbastecimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroDeAbastecimentoService {
  private readonly API = 'http://localhost:3000/abastecimentos';
  private readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  listar(): Observable<RegistroAbastecimento[]> {
    const result = this.http.get<RegistroAbastecimento[]>(this.API);
    console.log(result);
    return result;
  }

  criar(
    registroAbastecimento: RegistroAbastecimento
  ): Observable<RegistroAbastecimento> {
    return this.http.post<RegistroAbastecimento>(
      this.API,
      registroAbastecimento,
      this.HTTP_OPTIONS
    );
  }

  editar(
    registroAbastecimento: RegistroAbastecimento
  ): Observable<RegistroAbastecimento> {
    const url = `${this.API}/${registroAbastecimento.id}`;
    return this.http.put<RegistroAbastecimento>(url, registroAbastecimento,this.HTTP_OPTIONS);
  }

  excluir(id: number): Observable<RegistroAbastecimento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<RegistroAbastecimento>(url);
  }

  buscarPorId(id: number): Observable<RegistroAbastecimento> {
    const url = `${this.API}/${id}`;
    return this.http.get<RegistroAbastecimento>(url);
  }
}
