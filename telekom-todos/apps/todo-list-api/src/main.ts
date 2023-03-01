import express from 'express';
import cors from 'cors';
import { ToDoItem } from '@telekom-todos/domain';
import bodyParser from 'body-parser';

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

const jsonParser = bodyParser.json();

app.options('/api/todo', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.end();
});

app.get('/api/todo', cors(corsOptions), (req, res) => {
  res.send(testData);
});

app.get('/api/todo/:id', cors(corsOptions), (req, res) => {
  const itemId = req.params['id'];
  const foundItem = testData.find((item) => item.id === itemId);
  if (!foundItem) {
    res.sendStatus(404);
  } else {
    res.send(foundItem);
  }
});

app.use(jsonParser);
// create new todo item
app.post('/api/todo', cors(corsOptions), (req, res) => {
  console.log('posted', JSON.stringify(req.body));
  const todoItem = req.body as ToDoItem;
  todoItem.id = `${testData.length + 1}`;
  testData.push(todoItem);
  res.send(todoItem);
});

app.put('/api/todo/:id', cors(corsOptions), (req, res) => {
  console.log('putted', JSON.stringify(req.body));
  const todoItem = req.body as ToDoItem;
  const itemId = req.params['id'];
  const foundItem = testData.find((item) => item.id === itemId);
  if (!foundItem) {
    res.sendStatus(404);
  } else {
    foundItem.title = todoItem.title;
    foundItem.description = todoItem.description;
    res.send(true);
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
