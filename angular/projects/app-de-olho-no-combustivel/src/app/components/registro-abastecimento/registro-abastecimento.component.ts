import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './registro-abastecimento.component.html',
  styleUrls: ['./registro-abastecimento.component.css'],
})
export class RegistroAbastecimentoComponent {
  @Input() registroAbastecimento = {
    id: 1,
    postoGasolina: 'Posto Gasolina 1',
    quilometragem: 6000,
    litros: 12.5,
    trocouCombustivel: true,
    combustivel: 'Gasolina',
    jaAbasteceuNestePosto: true
  };
}
