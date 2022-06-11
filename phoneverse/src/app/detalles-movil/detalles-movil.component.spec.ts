import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMovilComponent } from './detalles-movil.component';

describe('DetallesMovilComponent', () => {
  let component: DetallesMovilComponent;
  let fixture: ComponentFixture<DetallesMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
