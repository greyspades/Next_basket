export type Product = {
    id: number;
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
    id: number;
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