import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoPasoCompraComponent } from './ultimo-paso-compra.component';

describe('UltimoPasoCompraComponent', () => {
  let component: UltimoPasoCompraComponent;
  let fixture: ComponentFixture<UltimoPasoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoPasoCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoPasoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
