import { Injectable } from '@angular/core';
import { RegistroAbastecimento } from './registroDeAbastecimento';
import { Constants } from './util/constants';

@Injectable({
  providedIn: 'root',
})
export class RegistroAbastecimentoStorageService {


   ultimoRegistro! : RegistroAbastecimento;

  constructor() {}

  public criar(abastecimento: RegistroAbastecimento) {

    console.log("entrou aqui");

    const listaAbascimentos = this.listar();

    console.log(listaAbascimentos);

    abastecimento.id = this.autoIncrementId(listaAbascimentos);

    listaAbascimentos.push(abastecimento);

    console.log(listaAbascimentos);

    localStorage.setItem(Constants.ABASTECIMENTO_KEY, JSON.stringify(listaAbascimentos));
  }



  public listar(): RegistroAbastecimento[] {
    return JSON.parse(localStorage.getItem(Constants.ABASTECIMENTO_KEY) || '{}');
  }


  public listarPorId(id : number): RegistroAbastecimento {

    const listaAbascimentos = this.listar();

    return listaAbascimentos.filter(item=> item.id = id)[0];

  }



  public excluir(id: number) {

    const listaAbastecimento = this.listar();

    const resultado = listaAbastecimento.filter(item=> item.id = id)[0];

    const index = listaAbastecimento.indexOf(resultado);

    listaAbastecimento.splice(index, 1);

    localStorage.setItem(Constants.ABASTECIMENTO_KEY, JSON.stringify(listaAbastecimento));

  }

  public editar(abastecimento: RegistroAbastecimento) {

    this.excluir(abastecimento.id!);

    const listaAbascimentos = this.listar();

    listaAbascimentos.push(abastecimento);

    localStorage.setItem(Constants.ABASTECIMENTO_KEY, JSON.stringify(listaAbascimentos));
  }


  private autoIncrementId(listaAbastecimentos : RegistroAbastecimento[]): number{

    let lastId = listaAbastecimentos.at(-1)?.id!;
    return lastId;

  }
}
