import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactFormErrors } from '../../models/contact-model';

@Component({
  selector: 'app-contact-form-fields',
  imports: [],
  templateUrl: './contact-form-fields.html',
  styleUrl: './contact-form-fields.scss'
})
export class ContactFormFieldsComponent {
  @Input() form!: FormGroup;
  @Input() errors?: ContactFormErrors;
  @Input() isLoading = false;
}
