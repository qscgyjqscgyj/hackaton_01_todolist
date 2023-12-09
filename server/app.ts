import express from 'express';

import router from './routes';
import tablesRouter from './routes/tables';

const app = express();
const port = process.env.PORT || 3666;

app.use('/', router);
app.use('/tables', tablesRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
