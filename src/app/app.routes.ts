import { Routes } from '@angular/router';
import { TableProductsComponent } from './modules/customer/components/table-products/table-products.component';
import { FormProductsComponent } from './modules/customer/components/form-products/form-products.component';

export const routes: Routes = [
    {
        path: 'list',
        component: TableProductsComponent
    },
    {
        path: 'form',
        component: FormProductsComponent
    },
    {
        path: '**',
        redirectTo: 'list'
    },
];
