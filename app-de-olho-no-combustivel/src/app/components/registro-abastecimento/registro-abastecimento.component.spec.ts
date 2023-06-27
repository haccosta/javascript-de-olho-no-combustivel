import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAbastecimentoComponent } from './registro-abastecimento.component';

describe('RegistroAbastecimentoComponent', () => {
  let component: RegistroAbastecimentoComponent;
  let fixture: ComponentFixture<RegistroAbastecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroAbastecimentoComponent]
    });
    fixture = TestBed.createComponent(RegistroAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
