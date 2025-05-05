import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-participacion',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './participacion.component.html',
  styleUrl: './participacion.component.scss'
})

export class ParticipacionComponent {
  registrationForm: FormGroup;
  loginForm: FormGroup;
  submissionSuccess = false;
  
  states = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas',
    'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Estado de México', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León',
    'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
    'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas',
    'Ciudad de México'
  ];
  
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aceptoBases: [false, Validators.requiredTrue]
    });
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  submitRegistration() {
    if (this.registrationForm.valid) {
      console.log('Registro enviado:', this.registrationForm.value);
      this.submissionSuccess = true;
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }
  
  submitLogin() {
    if (this.loginForm.valid) {
      console.log('Login enviado:', this.loginForm.value);
      this.submissionSuccess = true;
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }
  
  goToMemoranaGame() {
    this.submissionSuccess = false;
    // Aquí se puede implementar la navegación al juego de memorama
    // Por ejemplo, usando el Router de Angular
  }
  
  // Función auxiliar para marcar todos los campos como tocados
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  openBases() {
    window.open('url-to-bases', '_blank');
  }
  
  openAviso() {
    window.open('url-to-aviso', '_blank');
  }
}



