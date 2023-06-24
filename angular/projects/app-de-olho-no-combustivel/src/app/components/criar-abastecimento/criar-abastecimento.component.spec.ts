import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAbastecimentoComponent } from './criar-abastecimento.component';

describe('CriarAbastecimentoComponent', () => {
  let component: CriarAbastecimentoComponent;
  let fixture: ComponentFixture<CriarAbastecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAbastecimentoComponent]
    });
    fixture = TestBed.createComponent(CriarAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
