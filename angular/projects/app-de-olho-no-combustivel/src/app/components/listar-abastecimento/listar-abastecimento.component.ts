import { Component, OnInit } from '@angular/core';
import { RegistroDeAbastecimentoService } from '../registro-de-abastecimento.service';
import { Router } from '@angular/router';
import { RegistroAbastecimento } from '../registroDeAbastecimento';

@Component({
  selector: 'app-listar-abastecimento',
  templateUrl: './listar-abastecimento.component.html',
  styleUrls: ['./listar-abastecimento.component.css'],
})
export class ListarAbastecimentoComponent implements OnInit {
  listaAbastecimento: RegistroAbastecimento[] = [];

  estaVisivelBotaoCadastrar = true;

  constructor(
    private service: RegistroDeAbastecimentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe((data) => {
        this.listaAbastecimento = data;
      });
  }
}
