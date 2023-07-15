import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesaPagoComponent } from './procesa-pago.component';

describe('ProcesaPagoComponent', () => {
  let component: ProcesaPagoComponent;
  let fixture: ComponentFixture<ProcesaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesaPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
