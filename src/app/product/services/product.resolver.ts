import type { ResolveFn } from '@angular/router';
import type { Product } from '@app/product/models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Стеклянный козырек',
    price: 45000,
    imageSrc: 'assets/images/products/canopy.png',
  },
  {
    id: 2,
    title: 'Стеклянное ограждение',
    price: 29000,
    imageSrc: 'assets/images/products/barrier.png',
  },
  {
    id: 3,
    title: 'Душевая перегородка стеклянная',
    price: 23000,
    imageSrc: 'assets/images/products/shower.png',
  },
  {
    id: 4,
    title: 'Офисная перегородка из закаленного стекла',
    price: 18000,
    imageSrc: 'assets/images/products/door.png',
  },
];

export const productResolver: ResolveFn<Product> = ({ params }) =>
  PRODUCTS.find(product => product.id === params.productId);
