import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../sequelize';

const TodoItems = sequelizeDB.define(
    'TodoItems',
    {
        name: DataTypes.STRING,
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        completed: DataTypes.BOOLEAN,
    },
    {
        createdAt: false,
        updatedAt: false,
    },
);

export default TodoItems;
