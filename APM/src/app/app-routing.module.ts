import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { LoginComponent } from './user/login.component';

const ROUTES: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  // {
  //   path: 'products/:id',
  //   canActivate: [ProductDetailGuard],
  //   component: ProductDetailComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
