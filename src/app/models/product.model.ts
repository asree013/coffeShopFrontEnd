export class Product {
    id: string = '';
    name: string = '';
    price: number = 0;
    stock: number = 0;
    catagory: string = '';
    detail: string = '';
    image: any;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}

export interface ProductElement {
    id: string;
    name: string;
    price: number;
    stock: number;
    catagory: string;
    detail: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}
