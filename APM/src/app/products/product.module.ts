import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      {
          path: 'products',
          component: ProductListComponent
      },
      {
          path: 'products/:id',
          canActivate: [ProductDetailGuard],
          component: ProductDetailComponent
      },
      {
          path: 'products/:id/edit',
       //   canActivate: [ProductDetailGuard],
          component: ProductEditComponent
      }
  ]),
    SharedModule
  ]
})
export class ProductModule { }
