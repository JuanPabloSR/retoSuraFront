import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ValidarCausanteComponent } from './validar-causante.component';
import { ErrorSpanDirective } from 'src/app/shared/directives/error-span.directive';

describe('Probando formulario validar causante', () => {
  let component: ValidarCausanteComponent;
  let fixture: ComponentFixture<ValidarCausanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidarCausanteComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidarCausanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Probando creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializarse correctamente el formulario', () => {
    expect(component.myForm.value).toEqual({
      tipoDocumento: '',
      documento: '',
    });
  });

  it('should show error message if type of document is not selected', () => {
    const tipoDocumento = component.myForm.controls['tipoDocumento'];
    tipoDocumento.setValue('');

    const tipoDocumentoField = fixture.debugElement.query(By.css('[formControlName="tipoDocumento"]'));

    // Dispara el evento 'change' en el elemento select
    tipoDocumentoField.triggerEventHandler('change', null);

    fixture.detectChanges();

    const tipoDocumentoError = fixture.debugElement.query(By.directive(ErrorSpanDirective)).nativeElement;
    console.log(tipoDocumentoError)
    expect(tipoDocumentoError.textContent.trim()).toEqual('Debe seleccionar una opción');
  });


  it('Debe desactivarse el boton consultar cuando el formulario este "pending"', () => {
    component.myForm.markAsPending();
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(
      By.css('button[type=submit]')
    );
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });
});
