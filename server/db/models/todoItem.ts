'use strict';
import { TodoItem } from 'shared/types';

const { Model } = require('sequelize');

module.exports = (sequelize: any, DataTypes: TodoItem) => {
    class TodoItem extends Model {
        static associate(models: any) {
            // define association here
        }
    }
    TodoItem.init(
        {
            name: DataTypes.name,
            id: DataTypes.id,
            completed: DataTypes.completed,
        },
        {
            sequelize,
            modelName: 'TodoItem',
        },
    );
    return TodoItem;
};
