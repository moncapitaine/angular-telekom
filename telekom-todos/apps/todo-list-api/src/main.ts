import express from 'express';
import cors from 'cors';
import { ToDoItem } from '@telekom-todos/domain';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

const corsOptions = {
  origin: '*',
};

const testData: ToDoItem[] = [
  {
    id: '1',
    title: 'todo1',
  },
  {
    id: '2',
    title: 'todo2',
  },
];

app.get('/api/todo', cors(corsOptions), (req, res) => {
  res.send(testData);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
