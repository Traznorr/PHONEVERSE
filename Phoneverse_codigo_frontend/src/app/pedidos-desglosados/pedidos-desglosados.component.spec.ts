import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDesglosadosComponent } from './pedidos-desglosados.component';

describe('PedidosDesglosadosComponent', () => {
  let component: PedidosDesglosadosComponent;
  let fixture: ComponentFixture<PedidosDesglosadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosDesglosadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosDesglosadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
