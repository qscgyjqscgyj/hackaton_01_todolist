import express from 'express';
import { TodoItem } from '../db/models/todoItem';
import { sequelizeDB } from '../db/sequelize';
const router = express.Router();

router.get('/', async (_req, res) => {
    sequelizeDB
        .authenticate()
        .then(() => {
            console.log('!!!!!!Connection has been established successfully.');
        })
        .catch((err) => {
            console.error('!!!!!!Unable to connect to the database:', err);
        });

    try {
        console.log('!!!!!', await TodoItem.findAll());
        const todoItems = await TodoItem.findAll();

        res.json(todoItems);
    } catch (error) {
        console.error('Error fetching todo items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// router.post('/', async (req, res) => {
//     // const { name, completed }: TodoItemModel = req.body;

//     try {
//         const newTodoItem: TodoItemModel = await TodoItem.create({
//             name: 'asda',
//             completed: false,
//         });
//         res.json(newTodoItem);
//     } catch (error) {
//         console.error('Error creating todo item:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

export default router;
