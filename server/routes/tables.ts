import express, { Request } from 'express';
import { modelsMap } from '../db/models';
import { TableNames } from '../../shared/types';
const tablesRouter = express.Router();

type TablesRouterParams = {
    tableName: TableNames;
    id?: string;
};

function getModelByName(tableName: TableNames) {
    return modelsMap[tableName];
}

tablesRouter.get('/:tableName', async (req: Request<TablesRouterParams>, res) => {
    const currentModel = getModelByName(req.params.tableName);
    const queryParams = req.query.queryParams as {
        [key: string]: string | number | boolean;
    } | null;
    try {
        const todoItems = await currentModel.findAll({
            where: queryParams,
        });
        res.json(todoItems);
    } catch (error) {
        console.error('Error fetching todo items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

tablesRouter.get('/:tableName/:id', async (req: Request<TablesRouterParams>, res) => {
    const currentModel = getModelByName(req.params.tableName);
    try {
        const todoItems = await currentModel.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(todoItems);
    } catch (error) {
        console.error('Error fetching todo items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

tablesRouter.post('/:tableName', async (req: Request<TablesRouterParams>, res) => {
    const { name, completed } = req.body;
    const currentModel = getModelByName(req.params.tableName);

    try {
        const newTodoItem = await currentModel.create({
            name: name,
            completed: completed,
        });
        res.status(200).json(newTodoItem);
    } catch (error) {
        console.error('Error creating todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.send();
});

tablesRouter.put('/:tableName/:id', async (req: Request<TablesRouterParams>, res) => {
    const currentModel = getModelByName(req.params.tableName);
    const { name, completed } = req.body;

    try {
        const updatedTodoItem = await currentModel.update(
            { name, completed },
            {
                where: {
                    id: req.params.id,
                },
                returning: true,
            },
        );

        const [numRowsAffected, [updatedRecord]] = updatedTodoItem;

        if (numRowsAffected > 0) {
            res.json(updatedRecord);
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error updating todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

tablesRouter.delete('/:tableName/:id', async (req: Request<TablesRouterParams>, res) => {
    const currentModel = getModelByName(req.params.tableName);

    try {
        const deletedRowsCount = await currentModel.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (deletedRowsCount > 0) {
            res.json({ message: 'Record deleted successfully' });
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error deleting todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default tablesRouter;
