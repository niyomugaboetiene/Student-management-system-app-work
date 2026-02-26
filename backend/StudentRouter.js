import express from "express"
import connection from "./connection.js"

const router = express.Router()

router.post('/addStudent', async(req, res) => {
    try {
       const { student_name, student_gender, student_age } = req.body;

       if (!student_age || !student_age || !student_gender || !student_name)

    }
})