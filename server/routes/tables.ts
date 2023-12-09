import express from 'express';
import { TodoItem } from '../db/models/todoItem';
const tablesRouter = express.Router();

tablesRouter.get('/:tableName', async (_req, res) => {
    try {
        const todoItems = await TodoItem.findAll();
        res.json(todoItems);
    } catch (error) {
        console.error('Error fetching todo items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

tablesRouter.post('/', async (req, res) => {
    const { name, completed } = req.body;

    try {
        const newTodoItem = await TodoItem.create({
            name: name,
            completed: completed,
        });
        res.json(newTodoItem);
    } catch (error) {
        console.error('Error creating todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default tablesRouter;
