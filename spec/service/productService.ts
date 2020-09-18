import * as request from "supertest";
import {config} from "../config/config";
import {Endpoints} from "../constant/endpoints";

export class ProductService {

    private static readonly HOST = `${config.host}:${config.port}`;


    public static async deleteProduct(id: number): Promise<request.Response> {
        console.log(`Deleting product ${id}`);
        return request(this.HOST)
            .delete(`${Endpoints.DELETE_PRODUCT}/${id}`);
    }

    public static async getProducts(): Promise<request.Response> {
        return request(this.HOST)
            .get(Endpoints.GET_PRODUCTS);
    }

}