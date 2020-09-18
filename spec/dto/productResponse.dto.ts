import {CategoryResponseDto} from "./categoryResponse.dto";

export class ProductResponseDto {
    id: number;
    name: string;
    type: string;
    price: number;
    shipping: number;
    upc: string;
    description: string;
    manufacturer: string;
    model: string;
    url: string;
    image: string;
    categories: Array<CategoryResponseDto>;
}