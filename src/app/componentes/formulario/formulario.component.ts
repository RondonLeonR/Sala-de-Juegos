import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Preguntas } from '../../clases/preguntas';


import Swal, { SweetAlertIcon } from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public preguntas: Preguntas = new Preguntas();

  public encuestaForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    apellido: new FormControl('', [
      Validators.required
    ]),
    observacion: new FormControl('', [
      Validators.required
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(99)
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(10)
    ]),
  });




  constructor(
    private servicioEncuesta: EncuestaService,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {

  }


  public AgregarRespuesta() {

    this.preguntas.nombre = this.encuestaForm.get('nombre')?.value;
    this.preguntas.apellido = this.encuestaForm.get('apellido')?.value;
    this.preguntas.edad = this.encuestaForm.get('edad')?.value;
    this.preguntas.telefono = this.encuestaForm.get('telefono')?.value;
    this.preguntas.observaciones = this.encuestaForm.get('observacion')?.value;
    this.servicioEncuesta.AgregarRespuesta(this.preguntas);

    this.alert('success', "Gracias por llenar el Formulario!");
    this.encuestaForm.reset();
  }

  alert(icon: SweetAlertIcon, text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })



    Toast.fire({
      icon: icon,
      title: text
    })
  }

}
