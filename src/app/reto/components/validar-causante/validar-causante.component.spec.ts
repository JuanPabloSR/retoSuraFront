import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ValidarCausanteComponent } from './validar-causante.component';
// import { ErrorSpanDirective } from 'src/app/shared/directives/error-span.directive';

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
    const formData = {
      tipoDocumento: '',
      documento: '',
    };
    component.myForm.setValue(formData);
    component.consultar();
    expect(component.myForm.valid).toBeFalsy();
  });


  it('Debe estar invalido inicialmente', () => {
    expect(component.myForm.invalid).toBeTruthy();
  });

  it('Debe mostrar un span de alerta cuando no se llene el input', () => {
    const tipoDocumento = component.myForm.controls['tipoDocumento'];
    tipoDocumento.setValue('');
    const tipoDocumentoField = fixture.debugElement.query(
      By.css('[formControlName="tipoDocumento"]')
    );
    tipoDocumentoField.triggerEventHandler('change', null);
    fixture.detectChanges();

    // const tipoDocumentoError = fixture.debugElement.query(By.directive(ErrorSpanDirective)).nativeElement;
    // expect(tipoDocumentoError.textContent.trim()).toEqual('Debe seleccionar una opción');
  });

  it('Debe desactivarse el boton consultar cuando el formulario este "pending"', () => {
    component.myForm.markAsPending();
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(
      By.css('button[type=submit]')
    );
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it('Debe retornar formulario invalido', () => {
    const tipoDocumentoSelect = fixture.debugElement.query(
      By.css('#tipoDocumento')
    );
    tipoDocumentoSelect.nativeElement.value = '';
    tipoDocumentoSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Verifica que el campo tipoDocumento sea invalido', () => {
    component.myForm.controls['tipoDocumento'].setValue('');
    component.myForm.controls['tipoDocumento'].markAsTouched();

    fixture.detectChanges();
    const tipoDocumentoSelect = fixture.debugElement.query(
      By.css('#tipoDocumento')
    );
    tipoDocumentoSelect.nativeElement.value = 'cedulaCiudadania';
    expect(component.campoValido('tipoDocumento')).toBeTrue();
  });

  it('Debe Verificar que la función consultar no se llame cuando el formulario es inválido y se envía', () => {
    spyOn(component, 'consultar');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component.consultar).not.toHaveBeenCalled();
  });

  it('Debe marcarse como valido el formulario', () => {
    const formData = {
      tipoDocumento: 'cedulaCiudadania',
      documento: '1098822469',
    };
    component.myForm.setValue(formData);
    component.consultar();
    expect(component.myForm.valid).toBeTruthy();
  });


  it('Debe validar el campo documento', () => {
    const invalidDocumentNumbers = ['123', '12345', '12a345', ''];
    invalidDocumentNumbers.forEach(num => {
      component.myForm.controls['documento'].setValue(num);
      expect(component.myForm.controls['documento'].valid).toBeFalsy();
    });

    component.myForm.controls['documento'].setValue('1234567');
    expect(component.myForm.controls['documento'].valid).toBeTruthy();
  });

  it('Debe validar el campo tipoDocumento', () => {
    component.myForm.controls['tipoDocumento'].setValue('');
    expect(component.campoValido('tipoDocumento')).toBeFalsy();
    component.myForm.controls['tipoDocumento'].setValue('cedulaCiudadania');
    expect(component.campoValido('tipoDocumento')).toBeFalsy();
  });
});
