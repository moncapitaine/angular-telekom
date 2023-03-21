import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Appointment, appointments } from './store'

const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/appointments', (req, res) => {
  res.send(appointments)
})

app.post('/appointments', (req, res) => {
  const newAppointment = req.body
  console.log(req.body)
  newAppointment.id = (appointments.length + 1).toString()
  appointments.push(newAppointment)
  res.send(newAppointment)
})

app.put('/appointments/:id', (req, res) => {
  const appointment = req.body as Appointment
  const appointmentId = req.params['id']
  const foundItem = appointments.find((item) => item.id === appointmentId)
  if (!foundItem) {
    res.sendStatus(404)
  } else {
    foundItem.name = appointment.name
    foundItem.start = appointment.start
    res.send(true)
  }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
