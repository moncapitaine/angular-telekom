import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { addItem, Appointment, deleteIndex, getList } from './store'

const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/appointments', (req, res) => {
  res.send(getList())
})

app.post('/appointments', (req, res) => {
  const newAppointment = req.body
  console.log(req.body)
  newAppointment.id = (getList().length + 1).toString()
  addItem(newAppointment)
  res.send(newAppointment)
})

app.put('/appointments/:id', (req, res) => {
  const appointment = req.body as Appointment
  const appointmentId = req.params['id']
  const foundItem = getList().find((item) => item.id === appointmentId)
  if (!foundItem) {
    res.sendStatus(404)
  } else {
    foundItem.name = appointment.name
    foundItem.start = appointment.start
    res.send(true)
  }
})

// @ts-ignore
app.delete('/appointments/:id', (req, res) => {
  const appointmentId = req.params['id']
  const foundIndex = getList().findIndex((item) => item.id === appointmentId)
  if (foundIndex < 0) {
    res.sendStatus(404)
  } else {
    deleteIndex(foundIndex)
    res.sendStatus(204)
  }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
