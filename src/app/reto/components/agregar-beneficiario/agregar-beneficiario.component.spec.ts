import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AgregarBeneficiarioComponent } from './agregar-beneficiario.component';

describe('AgregarBeneficiarioComponent', () => {
  let component: AgregarBeneficiarioComponent;
  let fixture: ComponentFixture<AgregarBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarBeneficiarioComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Probando creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe estar invalido inicialmente', () => {
    expect(component.myForm.invalid).toBeTruthy();
  });

  it('Debe inicializarse correctamente el formulario', () => {
    const formData = {
      tipoDocumento: '',
      documento: '',
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      genero: '',
      tipoBeneficiario: '',
      estudiaActualmente: '',
      dependeEconomicamente: ''
    };
    component.myForm.setValue(formData);
    component.agregar();
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Debe marcarse como valido el formulario', () => {
    const formData = {
      tipoDocumento: 'cedulaCiudadania',
      documento: '1098822469',
      nombres: 'Juan',
      apellidos: 'Pablo',
      fechaNacimiento: '30-08-1999',
      genero: 'masculino',
      tipoBeneficiario: 'hijo',
      estudiaActualmente: 'si',
      dependeEconomicamente: 'si'
    };
    component.myForm.setValue(formData);
    component.agregar();
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

  it('Debe validar el campo nombres', () => {
    component.myForm.controls['nombres'].setValue('');
    expect(component.campoValido('nombres')).toBeFalsy();
    component.myForm.controls['nombres'].setValue('Juan');
    expect(component.campoValido('nombres')).toBeFalsy();
  });

  it('Debe validar el campo apellidos', () => {
    component.myForm.controls['apellidos'].setValue('');
    expect(component.campoValido('apellidos')).toBeFalsy();
    component.myForm.controls['apellidos'].setValue('Perez');
    expect(component.campoValido('apellidos')).toBeFalsy();
  });

  it('Debe validar el campo fechaNacimiento', () => {
    component.myForm.controls['fechaNacimiento'].setValue('');
    expect(component.campoValido('fechaNacimiento')).toBeFalsy();
    component.myForm.controls['fechaNacimiento'].setValue('1990-01-01');
    expect(component.campoValido('fechaNacimiento')).toBeFalsy();
  });

  it('Debe validar el campo genero', () => {
    component.myForm.controls['genero'].setValue('');
    expect(component.campoValido('genero')).toBeFalsy();
    component.myForm.controls['genero'].setValue('Masculino');
    expect(component.campoValido('genero')).toBeFalsy();
  });

  it('Debe validar el campo tipoBeneficiario', () => {
    component.myForm.controls['tipoBeneficiario'].setValue('');
    expect(component.campoValido('tipoBeneficiario')).toBeFalsy();
    component.myForm.controls['tipoBeneficiario'].setValue('Estudiante');
    expect(component.campoValido('tipoBeneficiario')).toBeFalsy();
  });

  it('Debe validar el campo estudiaActualmente', () => {
    component.myForm.controls['estudiaActualmente'].setValue('');
    expect(component.campoValido('estudiaActualmente')).toBeFalsy();
    component.myForm.controls['estudiaActualmente'].setValue('No');
    expect(component.campoValido('estudiaActualmente')).toBeFalsy();
  });

  it('Debe validar el campo dependeEconomicamente', () => {
    component.myForm.controls['dependeEconomicamente'].setValue('');
    expect(component.campoValido('dependeEconomicamente')).toBeFalsy();
    component.myForm.controls['dependeEconomicamente'].setValue('No');
    expect(component.campoValido('dependeEconomicamente')).toBeNull();
  });


});
