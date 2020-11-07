import { Module } from '@nestjs/common'
import { TypeOrmConfig } from './typeorm.config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
