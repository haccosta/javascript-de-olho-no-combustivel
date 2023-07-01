import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAbastecimentoComponent } from './listar-abastecimento.component';

describe('ListarAbastecimentoComponent', () => {
  let component: ListarAbastecimentoComponent;
  let fixture: ComponentFixture<ListarAbastecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAbastecimentoComponent]
    });
    fixture = TestBed.createComponent(ListarAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
