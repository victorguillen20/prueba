import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterviewService } from '../../shared/services/interview.service';
import { SharedInputComponent } from '../../shared/components/shared-input/shared-input.component'; // Import SharedInputComponent

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    SharedInputComponent // Import SharedInputComponent directly
  ],
  declarations: [
    FormProductsComponent,
    TableProductsComponent
  ],
  exports: [
    FormProductsComponent,
    TableProductsComponent,
    HttpClientModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CustomerModule { }
