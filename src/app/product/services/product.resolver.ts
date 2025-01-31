import type { ResolveFn, UrlTree } from '@angular/router';
import { RedirectCommand, Router } from '@angular/router';
import type { Product } from '@app/product/models/product';
import { inject } from '@angular/core';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Стеклянный козырек',
    price: 45000,
    imageSrc: 'assets/images/products/canopy.png',
    description: 'Ограждения лестниц, проемов, лоджий и террас',
    characteristics: [
      {
        title: 'Вариации',
        options: ['на вантах', 'на профиле', 'на консолях'],
      },
      {
        title: 'Стекло',
        options: ['одинарное', 'триплекс'],
      },
      {
        title: 'Фурнитура',
        options: ['m10', 'm14', 'm16'],
      },
      {
        title: 'Материал фурнитуры',
        options: ['AISI 304 (нерж. сталь)'],
      },
    ],
  },
  {
    id: 2,
    title: 'Стеклянное ограждение',
    price: 29000,
    imageSrc: 'assets/images/products/barrier.png',
    description: 'Ограждения лестниц, проемов, лоджий и террас',
    characteristics: [
      {
        title: 'Стекло',
        options: ['одинарное', 'триплекс'],
      },
      {
        title: 'Вид крепления',
        options: ['вертикальный', 'горизонтальный'],
      },
      {
        title: 'Крепление',
        options: ['зажимной профиль', '«монетное»', 'стойки', 'коннекторы'],
      },
      {
        title: 'Материал профиля',
        options: ['нержавеющая сталь'],
      },
    ],
  },
  {
    id: 3,
    title: 'Душевая перегородка стеклянная',
    price: 23000,
    imageSrc: 'assets/images/products/shower.png',
    description: 'Цена указана за перегородку 2000х900мм',
    characteristics: [
      {
        title: 'Стекло',
        options: ['перегородка mono', 'перегородка с дверью', 'душевой угол'],
      },
      {
        title: 'Стекло закаленное',
        options: ['6-12мм'],
      },
      {
        title: 'Фурнитура',
        options: ['стандарт', 'премиум'],
      },
      {
        title: 'Двери',
        options: ['распашные', 'раздвижные'],
      },
      {
        title: 'Вид стекла',
        options: ['классическое прозрачное', 'осветленное', 'тонированное', 'стемалит', 'матированное'],
      },
      {
        title: 'Цвет фурнитуры',
        options: ['черный', 'матовый', 'хром', 'золотой', 'под заказ'],
      },
    ],
  },
  {
    id: 4,
    title: 'Офисная перегородка из закаленного стекла',
    price: 18000,
    imageSrc: 'assets/images/products/door.png',
    description: 'Ограждения лестниц, проемов, лоджий и террас',
    characteristics: [
      {
        title: 'Стекло',
        options: ['одинарное', 'триплекс'],
      },
      {
        title: 'Фурнитура',
        options: ['фитинги классические', '«вектор»'],
      },
      {
        title: 'Двери',
        options: ['на петлях', 'на доводчиках'],
      },
      {
        title: 'Вид стекла',
        options: ['классическое прозрачное', 'осветленное', 'тонированное', 'стемалит', 'матированное'],
      },
    ],
  },
];

export const productResolver: ResolveFn<Product> = ({ params }) => {
  const product = PRODUCTS.find(product => product.id === +params.productId);

  if (!product) {
    const router: Router = inject(Router);
    const urlTree: UrlTree = router.parseUrl('/not-found');

    return new RedirectCommand(urlTree);
  }

  return product;
};
