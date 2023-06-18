import { TestBed } from '@angular/core/testing';

import { RegistroDeAbastecimentoService } from './registro-de-abastecimento.service';

describe('RegistroDeAbastecimentoService', () => {
  let service: RegistroDeAbastecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroDeAbastecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
