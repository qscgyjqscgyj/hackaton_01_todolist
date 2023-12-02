const path = require('path');

module.exports = {
    development: {
        username: 'hackaton',
        password: '12345',
        database: 'hackaton',
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: true,
        migrationStorageTableName: 'SequelizeMeta',
        seederStorageTableName: 'SequelizeData',
        define: {
            timestamps: true,
        },
        modelsDir: path.resolve(__dirname, './db/models'),
        migrationsDir: path.resolve(__dirname, './db/migrations'),
        seedersDir: path.resolve(__dirname, './db/seeders'),
    },
};
