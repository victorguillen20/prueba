import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  dateValidator,
  formatDate,
} from '../../../../shared/helpers/date-validation.helper';
import {
  formatDateYYYYMMDDtoDDMMYYYY,
  getDateOneYearLater,
} from '../../../../shared/helpers/date-operation.helper';
import { InterviewService } from '../../../../shared/services/interview.service';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
})
export class FormProductsComponent implements OnInit {
  productDataForm!: FormGroup;
  isUpdateMode: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceProducts: InterviewService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.subscribeChange();
  }

  buildForm() {
    this.productDataForm = this.fb.group({
      id: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      logo: [null, Validators.required],
      date_release: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=[\d/]+$)(\d{2})\/(0[1-9]|1[0-2])\/(\d{4})$/),
          dateValidator,
        ],
      ],
      date_revision: [null, Validators.required],
    });
    this.productDataForm.get('date_revision')?.disable();
  }

  subscribeChange() {
    this.productDataForm.get('date_release')?.statusChanges.subscribe({
      next: () => {
        this.productDataForm
          .get('date_revision')
          ?.setValue(
            getDateOneYearLater(this.productDataForm.get('date_release')?.value)
          );
      },
    });

    const product = history.state;
    // Change: check that product exists before reading its properties.
    if (product && product.id) {
      const dateRelease = formatDateYYYYMMDDtoDDMMYYYY(product.date_release);
      const dateRevision = formatDateYYYYMMDDtoDDMMYYYY(product.date_revision);
      this.productDataForm.patchValue({
        id: product.id,
        name: product.name,
        description: product.description,
        logo: product.logo,
        date_release: dateRelease,
        date_revision: dateRevision,
      });
      this.productDataForm.get('id')?.disable();
      this.isUpdateMode = true;
    }
  }

  resetFormData(): void {
    this.productDataForm.reset();
    this.productDataForm.get('date_revision')?.disable();
  }

  onSubmit(): void {
    if (this.productDataForm.valid) {
      let formData = this.productDataForm.getRawValue();

      formData.date_release = formatDate(formData.date_release);
      formData.date_revision = formatDate(formData.date_revision);

      if (this.isUpdateMode) {
        this.serviceProducts.updateProduct(formData.id, formData).subscribe({
          next: (response) => {
            this.productDataForm.reset();
            this.alertMsg('success', 'Producto actualizado');
          },
          error: (error) => {
            this.alertMsg('error', 'Error al actualizar producto');
          },
        });
      } else {
        this.serviceProducts.registryProduct(formData).subscribe({
          next: (response) => {
            this.productDataForm.reset();
            this.alertMsg('success', 'Producto Registrado');
          },
          error: (error) => {
            this.alertMsg('error', 'Error al registrar producto');
          },
        });
      }
    } else {
      this.productDataForm.markAllAsTouched();
    }
  }

  getFormControl(name: string) {
    return this.productDataForm.get(name) as FormControl;
  }

  alertMsg(alertType: any, alertMessage: string): void {
    this.alertType = alertType;
    this.alertMessage = alertMessage;
    setTimeout(() => (this.alertMessage = ''), 5000);
  }
}
