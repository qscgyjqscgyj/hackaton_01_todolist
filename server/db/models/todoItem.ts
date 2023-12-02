import { DataTypes } from 'sequelize';

import { sequelizeDB } from '../sequelize';

export const TodoItem = sequelizeDB.define(
    'TodoItems',
    {
        name: DataTypes.STRING,
        id: { type: DataTypes.INTEGER, primaryKey: true },
        completed: DataTypes.BOOLEAN,
    },
    {
        createdAt: false,
        updatedAt: false,
    },
);
