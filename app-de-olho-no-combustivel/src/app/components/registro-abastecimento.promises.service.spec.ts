import { TestBed } from '@angular/core/testing';

import { RegistroAbastecimento.PromisesService } from './registro-abastecimento.promises.service';

describe('RegistroAbastecimento.PromisesService', () => {
  let service: RegistroAbastecimento.PromisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroAbastecimento.PromisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
