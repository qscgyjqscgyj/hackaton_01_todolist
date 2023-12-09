import express from 'express';
import cors from 'cors';

import router from './routes';
import tablesRouter from './routes/tables';

const app = express();
const port = process.env.PORT || 3666;

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', router);
app.use('/tables', tablesRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
