import express from "express"
import  cors from "cors"
import StudentRouter from "./StudentRouter.js";

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
    
}))

// handling middleware
app.use('/student', StudentRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log('http://localhost:5000')
});