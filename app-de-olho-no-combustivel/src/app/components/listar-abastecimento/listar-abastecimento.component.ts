import { Component, OnInit } from '@angular/core';
import { RegistroDeAbastecimentoService } from '../registro-de-abastecimento.service';
import { Router } from '@angular/router';
import { RegistroAbastecimento } from '../registroDeAbastecimento';
import { RegistroAbastecimentoStorageService } from '../registro-abastecimento.storage.service';
import { Constants } from '../util/constants';

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
    private storage: RegistroAbastecimentoStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe(
      (data) => {
        this.listaAbastecimento = data;
      }
    );
  }
}
