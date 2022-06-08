import express from "express"
import cors from 'cors'
import db from "./database/db.js"
import operationRoutes from './routes/routes.js'
require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())
app.use('/operations', operationRoutes)

try {
    await db.authenticate()
    console.log("DB connected succesfully")
} catch (error) {
    console.log(`Conection error: ${error}`)
}



app.listen( process.env.PORT || 8000, ()=>{
    console.log('You are Connected!')
})