import type { ActivatedRouteSnapshot, Data, Routes } from '@angular/router';
import { productResolver } from '@app/product/services/product.resolver';
import type { Product } from '@app/product/models/product';

export const routes: Routes = [
  {
    path: '',
    title: 'Производство стекол',
    loadComponent: () => import('@app/landing/pages/main-page/main-page.component'),
  },
  {
    path: 'product/:productId',
    resolve: {
      product: productResolver,
    },

    children: [
      {
        path: '',
        title: ({ parent }: ActivatedRouteSnapshot & { parent: { data: Data & { product: Product } } }) =>
          parent.data?.product?.title,
        loadComponent: () => import('@app/landing/pages/product-page/product-page.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
