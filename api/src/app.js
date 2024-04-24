import express from 'express'
import { router } from './users/user.routes.js'

const app = express()

app.use(express.json())

app.use('/api/v1', router)


app.listen(3001, () => {
    console.log('Server is running on Port 3001')
})