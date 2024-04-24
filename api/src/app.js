import express from 'express'

const app = express()

app.use(express.json())

// app.use('/api/v1')
console.log('hola')

app.listen(3001, () => {
    console.log('Server is running on Port 3001')
})