import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroDeAbastecimentoService } from '../registro-de-abastecimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-abastecimento',
  templateUrl: './criar-abastecimento.component.html',
  styleUrls: ['./criar-abastecimento.component.css'],
})
export class CriarAbastecimentoComponent {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: RegistroDeAbastecimentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      postoGasolina: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      quilometragem: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      litrosAbastecidos: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      jaAbasteceuNestePosto: [false],
      trocouCombustivel: [false],
      tipoCombustivel: ['Gasolina'],
    });
  }

  criarRegistroAbastecimento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        alert('Cadastrado com Sucesso !');
        this.router.navigate(['/listarRegistroAbastecimento']);
      });
    }
  }
}
