import { expect } from 'chai';
import {describe, it} from 'mocha';
import {ProductService} from "../service/productService";
import {ErrorResponseDto} from "../dto/errorResponse.dto";
import {ProductsSearchResponseDto} from "../dto/productsSearchResponse.dto";

describe('Product service', function () {

    it('should throw an error when deleting non-existing product', async () => {
        const nonExistingProductId = 123;

        const response = await ProductService.deleteProduct(nonExistingProductId);
        expect(response.status, 'Status code is incorrect').to.be.equal(404);

        const responseBody = response.body as ErrorResponseDto;
        expect(responseBody.className, 'Error class name is incorrect')
            .to.be.equal('not-found');
        expect(responseBody.name, 'Error name is incorrect')
            .to.be.equal('NotFound');
        expect(responseBody.code, 'Error code is incorrect')
            .to.be.equal(404);
        expect(responseBody.message, 'Error message is incorrect')
            .to.be.equal(`No record found for id '${nonExistingProductId}'`);
    });

    it('should return products', async () => {
        const testCategory = 'TVs';
        const shippingLower = 25;
        const shippingGreater = 5;

        const response = await ProductService.getProducts();
        expect(response.status, 'Status code is incorrect').to.be.equal(200);

        const responseBody = response.body as ProductsSearchResponseDto;
        responseBody.data
            .filter(product => product.categories
                .some(category => category.name === testCategory))
            .filter(product => (product.shipping >= shippingGreater && product.shipping <= shippingLower))
            .forEach(async product => {
                const response = await ProductService.deleteProduct(product.id);
                expect(response.status, 'Status code is incorrect').to.be.equal(200);
            });
    });

});