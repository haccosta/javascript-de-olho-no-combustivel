import { TestBed } from '@angular/core/testing';

import { RegistroAbastecimento.StorageService } from './registro-abastecimento.storage.service';

describe('RegistroAbastecimento.StorageService', () => {
  let service: RegistroAbastecimento.StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroAbastecimento.StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
