import { DynamicModule } from '@nestjs/common';

import * as entities from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';
// dotenv.config();

async function getTypeOrmModule(): Promise<DynamicModule> {
  console.log(`1111111`,process.env.PGPORT)
  return TypeOrmModule.forRoot({
    type: 'postgres',
    port:  +process.env.PGPORT,
    password: process.env.PGPASSWORD,
    username: process.env.PGUSER,
    database: process.env.DB_NAME,
    entities: Object.values(entities),
    synchronize: true,
    logging: false,
    host: process.env.PGHOST,
  });
}

export default getTypeOrmModule;
