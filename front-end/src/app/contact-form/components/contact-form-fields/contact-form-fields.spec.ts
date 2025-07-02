import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormFields } from './contact-form-fields';

describe('ContactFormFields', () => {
  let component: ContactFormFields;
  let fixture: ComponentFixture<ContactFormFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormFields);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
