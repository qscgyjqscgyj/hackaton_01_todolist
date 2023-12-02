import * as pg from 'pg';
import { Sequelize } from 'sequelize';

export const sequelizeDB = new Sequelize('hackaton', 'hackaton', '12345', {
    host: 'hackaton-db',
    port: 5432,
    dialect: 'postgres',
    dialectModule: pg,
});
