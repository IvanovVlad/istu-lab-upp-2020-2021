import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Description } from "../Description/description.entity";
import { GenreList } from "../GenreList/genreList.entity";
import { ProductKey } from "../ProductKey/productKey.entity";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column({ type: "money" })
    price: number;

    @OneToMany(() => GenreList, genreList => genreList.id)
    @JoinColumn({name: "genre_id"})
    genre_id: GenreList;

    @OneToOne(() => Description, description => description.id)
    @JoinColumn({name: "description_id"})
    description_id: Description;

    @OneToMany(() => ProductKey, pk => pk.id)
    @JoinColumn({name: "key_id"})
    key_id: ProductKey;
}