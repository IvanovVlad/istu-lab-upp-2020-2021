import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "../Genre/genre.entity";
import { Product } from "../Product/product.entity";

@Entity()
export class GenreList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Genre, genre => genre.genre)
    @JoinColumn({name: "genre_id"})
    genre_id: Genre;

    @ManyToOne(() => Product, product => product.id)
    @JoinColumn({name: "product_id"})
    product_id: Product;
}