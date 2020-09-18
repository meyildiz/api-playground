import {ProductResponseDto} from "./productResponse.dto";

export class ProductsSearchResponseDto {
    total: number;
    limit: number;
    skip: number;
    data: Array<ProductResponseDto>;
}