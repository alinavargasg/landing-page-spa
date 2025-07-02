import { Validators } from '@angular/forms';
import { MIN_NAME_LENGTH, MAX_MESSAGE_LENGTH } from '../models/contact-model';

export const contactValidators = {
  nombre: [
    Validators.required,
    Validators.minLength(MIN_NAME_LENGTH),
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  ],
  email: [Validators.required, Validators.email],
  mensaje: [Validators.maxLength(MAX_MESSAGE_LENGTH)]
};