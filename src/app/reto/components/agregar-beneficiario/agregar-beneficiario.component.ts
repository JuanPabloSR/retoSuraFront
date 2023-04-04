import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-beneficiario',
  templateUrl: './agregar-beneficiario.component.html',
  styles: [
  ]
})
export class AgregarBeneficiarioComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    tipoDocumento: ['', [Validators.required]],
    documento: ['', [Validators.required, Validators.pattern(/^\d{6,}$/)]],
    nombres: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,50}$/)]],
    apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,50}$/)]],
    fechaNacimiento: ['', [Validators.required ]],
    genero: ['', [Validators.required ]],
    tipoBeneficiario: ['', [Validators.required ]],
    estudiaActualmente: ['', [Validators.required ]],
    dependeEconomicamente: ['', [Validators.required ]],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      tipoDocumento: '',
      documento: '',
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      genero: '',
      tipoBeneficiario: '',
      estudiaActualmente: '',
      dependeEconomicamente: '',
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

    console.log(this.myForm.value);
    // this.myForm.markAsUntouched();
    // this.myForm.markAsPristine();
  }

}
