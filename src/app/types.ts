export type NavigationLink = {
    name: string,
    link: string,
    hasMenu: boolean,
    menuItems?: {[key: string]: string}
}

export type Product = {
    id: string;
    name: string;
    title: string;
    brand: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: string;
    thumbnail: string;
}

export type ProductCard = {
    id: string;
    title: string;
    brand: string;
    discountPercentage: number;
    price: number;
    thumbnail: string;
}

export type JSONResponse = {
    products: Product[];
    skip: number;
    total: number;
    limit: number;
}

export type Cart = {
    currentProduct: Product;
    products: Product[];
    total: number;
}