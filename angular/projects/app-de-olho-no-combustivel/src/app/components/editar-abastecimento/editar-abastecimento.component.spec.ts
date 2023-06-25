import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAbastecimentoComponent } from './editar-abastecimento.component';

describe('EditarAbastecimentoComponent', () => {
  let component: EditarAbastecimentoComponent;
  let fixture: ComponentFixture<EditarAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAbastecimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
