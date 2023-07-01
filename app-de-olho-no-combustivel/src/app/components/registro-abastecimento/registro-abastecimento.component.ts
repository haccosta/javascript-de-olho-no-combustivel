import { Component, Input } from '@angular/core';
import { RegistroAbastecimento } from '../registroDeAbastecimento';

@Component({
  selector: '[app-table-row]',
  templateUrl: './registro-abastecimento.component.html',
  styleUrls: ['./registro-abastecimento.component.css'],
})
export class RegistroAbastecimentoComponent {
  @Input() registroAbastecimento : RegistroAbastecimento = {
    id: 0,
    postoGasolina: '',
    quilometragem: 0,
    litrosAbastecidos: 0,
    trocouCombustivel: false,
    tipoCombustivel: '',
    jaAbasteceuNestePosto: false
  };
}
