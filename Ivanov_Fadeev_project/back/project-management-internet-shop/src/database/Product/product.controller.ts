import { Controller, Get, Body, Post, ValidationPipe, BadRequestException, Query, Delete } from '@nestjs/common';
import { ProductsResponce, PaginationOptions } from 'src/service/pagination';
import { ProductService } from './product.service';

@Controller('items')
export class ProductController {
    constructor(
        private productService: ProductService,
    ) { }

    @Get()
    async GetAllItems(@Query() qu): Promise<ProductsResponce> {
        var { genre, description, page, limit } = qu;
        var responce = await this.productService.getAll(new PaginationOptions(page, limit));
        return responce;
    }
}