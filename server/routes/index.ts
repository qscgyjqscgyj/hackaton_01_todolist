import express from 'express';
import { TodoItem } from '../db/models/todoItem';
import { sequelizeDB } from '../db/sequelize';
const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const todoItems = await TodoItem.findAll();
        res.json(todoItems);
    } catch (error) {
        console.error('Error fetching todo items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
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

export default router;
