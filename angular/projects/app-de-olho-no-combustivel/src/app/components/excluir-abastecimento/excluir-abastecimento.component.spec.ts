import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAbastecimentoComponent } from './excluir-abastecimento.component';

describe('ExcluirAbastecimentoComponent', () => {
  let component: ExcluirAbastecimentoComponent;
  let fixture: ComponentFixture<ExcluirAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirAbastecimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
