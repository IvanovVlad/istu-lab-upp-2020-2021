import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Credentials } from './credentials'

import { Customer } from './database/Customer/customer.entity'
import { Description } from './database/Description/description.entity'
import { Genre } from './database/Genre/genre.entity'
import { GenreList } from './database/GenreList/genreList.entity'
import { Offer } from './database/Offer/offer.entitiy'
import { Product } from './database/Product/product.entity'
import { ProductKey } from './database/ProductKey/productKey.entity'
import { Image } from './database/Image/image.entity'

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: Credentials.host,
    username: Credentials.username,
    password: Credentials.password,
    database: Credentials.database,
    entities: [Customer, Description, GenreList, Genre,
        Image, Offer, Product, ProductKey, Image],
    synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
}