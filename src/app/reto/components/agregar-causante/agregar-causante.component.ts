import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-causante',
  templateUrl: './agregar-causante.component.html',
  styles: [
  ]
})
export class AgregarCausanteComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    tipoDocumento: ['', [Validators.required]],
    documento: ['', [Validators.required, Validators.pattern(/^\d{6,}$/)]],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      tipoDocumento: '',
      documento: ''
    });
  }

  campoValido(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  consultar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }

}