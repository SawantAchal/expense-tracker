import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import 'dotenv/config'
import transactionRouter from './routes/transactionRoutes.js'

const app = express()
const port = process.env.PORT || 5000;


app.use(express.json());

app.use(cors({origin: process.env.VITE_FRONTEND_URL}))

//connect db
connectDB()

app.use('/api/transaction' , transactionRouter)

app.get('/' , (req , res) => {
    res.send('API WORKING')
})

app.listen(port , () => {
    console.log(`server running on ${port}`)
})
