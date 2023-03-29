import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-causante',
  templateUrl: './agregar-causante.component.html',
  styles: [],
})
export class AgregarCausanteComponent implements OnInit {
  @Output() formularioCompleto = new EventEmitter<boolean>();

  myForm: FormGroup = this.fb.group({
    tipoDocumento: ['', [Validators.required]],
    documento: ['', [Validators.required, Validators.pattern(/^\d{6,}$/)]],
    nombres: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,50}$/)],
    ],
    apellidos: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,50}$/)],
    ],
    fechaNacimiento: ['', [Validators.required]],
    genero: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      tipoDocumento: '',
      documento: '',
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      genero: '',
    });
  }

  campoValido(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  agregar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.formularioCompleto.emit(true);
    console.log(this.myForm.value);
  }
}
