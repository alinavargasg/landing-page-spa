import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ContactService } from '../contact-form/services/contact-service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactFormData, ContactFormErrors } from '../contact-form/models/contact-model';
import { contactValidators } from '../contact-form/validators/contact-validators';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSpinner } from '@angular/material/progress-spinner';


@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [MatIcon, ReactiveFormsModule, CommonModule, MatSpinner],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss']
})
export class ContactFormComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly snackBar = inject(MatSnackBar);

  contactForm: FormGroup;
  isLoading = false;
  formErrors: ContactFormErrors = {};

  constructor(private fb: FormBuilder, 
              private contactService: ContactService, 
              private snackbar: MatSnackBar) 
  {
      this.contactForm = this.fb.group({
        nombre: ['', contactValidators.nombre],
        email: ['', contactValidators.email],
        mensaje: ['', contactValidators.mensaje]
      });
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: ['snackbar-success']
    });
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 8000,
      panelClass: ['snackbar-error']
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const formData: ContactFormData = this.contactForm.value;

    this.contactService.createContact(formData).subscribe({
      next: () => {
        this.handleSuccess();
      },
      error: (err: HttpErrorResponse) => {
        this.handleError(err); // Muestra el mensaje de error procesado
      }
    });
  }
  private handleSuccess(): void {
    this.isLoading = false;
    this.contactForm.reset();
    this.showSnackBar('Contacto registrado exitosamente!', 'success');
  }

  private handleError(error: HttpErrorResponse): void {
    this.isLoading = false;
    this.formErrors = this.parseErrors(error);
    this.showSnackBar(this.getErrorMessage(error), 'error');
  }

  private markAllAsTouched(): void {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  private showSnackBar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: `snackbar-${type}`
    });
  }

  private parseErrors(error: HttpErrorResponse): ContactFormErrors {
      if (error.status === 400 && error.error?.errors) {
        return error.error.errors;
      }
      return {};
    }

  private getErrorMessage(error: HttpErrorResponse): string {
    console.error('Error completo:', error); // Para depuración
    
    if (error.status === 0) {
      return 'Error de conexión: No se pudo contactar al servidor. Verifica tu conexión a internet.';
    }
    
    if (error.status === 400) {
      // Manejo específico para errores de validación
      return error.error?.message || 
            'Datos inválidos: ' + (error.error?.errors?.join(', ') || 'por favor revisa el formulario');
    }
    
    if (error.status === 401) {
      return 'No autorizado: Debes iniciar sesión para realizar esta acción.';
    }
    
    if (error.status === 403) {
      return 'Acceso prohibido: No tienes permisos para esta acción.';
    }
    
    if (error.status === 404) {
      return 'Recurso no encontrado.';
    }
    
    if (error.status >= 500) {
      return 'Error del servidor: Por favor intenta más tarde.';
    }
    
    // Mensaje específico del backend si existe
    if (error.error?.message) {
      return error.error.message;
    }
    
    // Mensaje genérico como última opción
    return 'Error al procesar tu solicitud. Por favor intenta nuevamente.';
  }
}