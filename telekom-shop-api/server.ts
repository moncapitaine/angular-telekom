import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { addItem, Product, deleteIndex, getList } from './store'

const PORT = 4001
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello Telekom Shop API')
})

app.get('/products/:id', (req, res) => {
  const itemId = req.params['id']
  const foundItem = getList().find((item) => item.id === itemId)
  if (!foundItem) {
    res.sendStatus(404)
  } else {
    res.send(foundItem)
  }
})

app.get('/products', (req, res) => {
  res.send(getList())
})

app.post('/products', (req, res) => {
  const newItem = req.body
  console.log(req.body)
  newItem.id = (getList().length + 1).toString()
  addItem(newItem)
  res.send(newItem)
})

app.put('/products/:id', (req, res) => {
  const item = req.body as Product
  const itemId = req.params['id']
  const foundItem = getList().find((item) => item.id === itemId)
  if (!foundItem) {
    res.sendStatus(404)
  } else {
    foundItem.name = item.name
    foundItem.description = item.description
    res.send(true)
  }
})

// @ts-ignore
app.delete('/products/:id', (req, res) => {
  const itemId = req.params['id']
  const foundIndex = getList().findIndex((item) => item.id === itemId)
  if (foundIndex < 0) {
    res.sendStatus(404)
  } else {
    deleteIndex(foundIndex)
    res.sendStatus(204)
  }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
