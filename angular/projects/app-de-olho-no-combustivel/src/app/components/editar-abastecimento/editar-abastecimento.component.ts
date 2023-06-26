import { RegistroDeAbastecimentoService } from './../registro-de-abastecimento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-abastecimento',
  templateUrl: './editar-abastecimento.component.html',
  styleUrls: ['./editar-abastecimento.component.css'],
})
export class EditarAbastecimentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: RegistroDeAbastecimentoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((data) => {
      this.formulario = this.formBuilder.group({
        id: [data.id],
        postoGasolina: [
          data.postoGasolina,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        quilometragem: [
          data.quilometragem,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        litrosAbastecidos: [
          data.litrosAbastecidos,
          Validators.compose([Validators.required, Validators.minLength(1)]),
        ],
        jaAbasteceuNestePosto: [data.jaAbasteceuNestePosto],
        trocouCombustivel: [data.trocouCombustivel],
        tipoCombustivel: [data.tipoCombustivel],
      });
      console.log(this.formulario.value);
    });
  }

  editarRegistroAbastecimento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarRegistroAbastecimento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarRegistroAbastecimento']);
  }
}
