import express from "express"
import connection from "./connection.js"

const router = express.Router()

router.post('/addStudent', async(req, res) => {
    try {
       const { student_name, student_gender, student_age } = req.body;

       if (!student_age || !student_gender || !student_name) {
         res.status(403).json({ message: 'Some fields are missing' });
       }

      connection.beginTransaction()

      const [result] =  await connection.query(
        'INSERT INTO student(student_name, student_gender, student_age) VALUES(?, ?, ?)',
        [student_name, student_gender, student_age]
       );

      if (result.ok) {
        return res.status(200).json({ message: 'User inserted successfully', user: result.insertId})
      }
    } catch (err) {
        return res.status(201).json({ error: err.message });
    }
})

export default router