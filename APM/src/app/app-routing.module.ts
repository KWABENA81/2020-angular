import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//mport { ProductDetailComponent } from './products/product-detail.component';
//import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { SelectiveStrategy } from './selective-strategy.service';
import { AuthGuard } from './user/auth.guard';
//import { LoginComponent } from './user/login.component';

const ROUTES: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    data: { preload: true },
    loadChildren: () =>
      import('./products/product.module').then(m => m.ProductModule)
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
    RouterModule.forRoot(
      ROUTES,
      {
        preloadingStrategy: SelectiveStrategy
      }
    )
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
