import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemResponce, PaginationOptions, ProductsResponce } from 'src/service/pagination';
import { GenreList } from '../GenreList/genreList.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ) { }

    async getAll(paginationOptions: PaginationOptions): Promise<ProductsResponce> {
        const responce = await this.productRepository.getAll(paginationOptions);

        var pr = new ProductsResponce();
        pr.genre = null;
        pr.items = [];

        for (var p of responce) {
            await this.convertToResponceItem(p).then(ri => pr.items.push(ri))
        }

        pr.pages = Math.floor(pr.items.length / paginationOptions.limit);

        return pr;
    }

    async getById(id: number): Promise<ItemResponce> {
        var item = await this.productRepository.find({
            relations: ["genre"],
            where: { id: id }
        });

        return await this.convertToResponceItem(item[0])
    }

    async convertToResponceItem(p): Promise<ItemResponce> {
        var ir = new ItemResponce();
        ir.price = p.price;
        ir.title = p.title;
        ir.genre = await this.getGenres(p);
        ir.id = p.id;

        return ir;
    }

    async getGenres(a) {
        const genreRepo = GenreList.getRepository();
        var xd = [];
        for (var gl of a.genre) {
            var temp = await genreRepo.find({
                relations: ["genre_id"],
                where: { id: gl.id }
            })
            xd.push(temp[0].genre_id.genre)
        }

        return xd.join(', ');
    }
}