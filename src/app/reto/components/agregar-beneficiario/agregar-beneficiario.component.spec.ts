import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AgregarBeneficiarioComponent } from './agregar-beneficiario.component';


describe('AgregarBeneficiarioComponent', () => {

  let component: AgregarBeneficiarioComponent;
  let fixture: ComponentFixture<AgregarBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBeneficiarioComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
