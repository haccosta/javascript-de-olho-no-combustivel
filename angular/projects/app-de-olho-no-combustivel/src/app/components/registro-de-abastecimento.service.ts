import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegistroAbastecimento } from './registroDeAbastecimento';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroDeAbastecimentoService {

  private readonly API = 'http://localhost:3000/abastecimentos';

  constructor
  (
    private http : HttpClient
  ) {}
  listar(): Promise<RegistroAbastecimento[]> {
    const result =  firstValueFrom(this.http.get<RegistroAbastecimento[]>(this.API));
    console.log(result)
    return result;
  }

  criar(registroAbastecimento: RegistroAbastecimento): Promise<RegistroAbastecimento> {
    return firstValueFrom(this.http.post<RegistroAbastecimento>(this.API, registroAbastecimento));
  }

  editar(registroAbastecimento: RegistroAbastecimento): Promise<RegistroAbastecimento> {
    const url = `${this.API}/${registroAbastecimento.id}`;
    return firstValueFrom(this.http.put<RegistroAbastecimento>(url, registroAbastecimento));
  }

  excluir(id: number): Promise<RegistroAbastecimento> {
    const url = `${this.API}/${id}`;
    return firstValueFrom(this.http.delete<RegistroAbastecimento>(url));
  }

  buscarPorId(id: number): Promise<RegistroAbastecimento> {
    const url = `${this.API}/${id}`;
    return firstValueFrom(this.http.get<RegistroAbastecimento>(url));
  }
}
