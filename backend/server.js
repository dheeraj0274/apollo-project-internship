import express from 'express';
import {connectDB} from './config/database.js';
import dotenv from 'dotenv';
import doctorRouter from './routes/doctorRoutes.js'
import cors from 'cors'


dotenv.config();
connectDB();
const Port= process.env.PORT;

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', doctorRouter)

app.get('/', (req,res)=>{
    res.send('hi')
})

app.listen(Port,()=>{
    console.log(`server is runnning on the port ${Port}`);
    
})