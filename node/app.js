import express from "express"
import cors from 'cors'
import db from "./database/db.js"
import operationRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/operations', operationRoutes)

try {
    await db.authenticate()
    console.log("Conexión exitosa a la db")
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}



app.listen(8000, ()=>{
    console.log('Server UP runing in http://localhost:8000/')
})