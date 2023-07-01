import { RegistroDeAbastecimentoService } from './../registro-de-abastecimento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroAbastecimento } from '../registroDeAbastecimento';

@Component({
  selector: 'app-excluir-abastecimento',
  templateUrl: './excluir-abastecimento.component.html',
  styleUrls: ['./excluir-abastecimento.component.css'],
})
export class ExcluirAbastecimentoComponent implements OnInit {
  registroAbastecimento: RegistroAbastecimento = {
    id: 0,
    postoGasolina: '',
    quilometragem: 0,
    litrosAbastecidos: 0,
    trocouCombustivel: false,
    tipoCombustivel: '',
    jaAbasteceuNestePosto: false,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: RegistroDeAbastecimentoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((data) => {
      this.registroAbastecimento = data;
    });
  }

  excluirRegistroAbastecimento() {
    if (this.registroAbastecimento.id) {
      this.service.excluir(this.registroAbastecimento.id).subscribe(() => {
        this.router.navigate(['listarRegistroAbastecimento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarRegistroAbastecimento']);
  }
}
