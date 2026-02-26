import express from "express"
import  cors from "cors"
import StudentRouter from "./StudentRouter.js";

const app = express()
app.use(express.json())
app.use(cors())

// handling middleware
app.use('/student', StudentRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log('https://localhost:5000')
});