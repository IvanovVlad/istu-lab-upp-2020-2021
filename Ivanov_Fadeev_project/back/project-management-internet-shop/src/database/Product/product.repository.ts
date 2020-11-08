import { PaginationOptions } from "src/service/pagination";
import { EntityRepository, Repository } from "typeorm";
import { Product } from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    async getAll(paginationOptions: PaginationOptions): Promise<Product[]> {
        return await this.find({
            relations: ["genre"],
            take: paginationOptions.limit,
            skip: paginationOptions.skip
        });
    }
}