export interface ProductCharacteristics {
  title: string;
  options: string[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  description?: string;
  characteristics?: ProductCharacteristics[];
}
