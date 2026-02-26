import express from "express"
import connection from "./connection.js"

const router = express.Router()

router.post('/addStudent', async(req, res) => {
    try {
       const { student_name, student_gender, student_age } = req.body;

       if (!student_age || !student_gender || !student_name) {
         res.status(403).json({ message: 'Some fields are missing' });
       }

     await connection.query(
        'INSERT INTO student(student_name, student_gender, student_age) VALUES(?, ?, ?)',
        [student_name, student_gender, student_age]
       );

        return res.status(201).json({ message: 'User inserted successfully'})
      
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})

router.get('/studentList', async(req, res) => {
    try {
       const [result] =  await connection.query(
            'SELECT * FROM student'
     );

     if (result.length === 0) {
        res.status(404).json({ message: 'No student in system' });
     }

     return res.status(200).json({ user: result });
    } catch (err) {
           return res.status(500).json({ error: err.message });   
    }
});

// ? retrieve single user
router.get('/studentList/:student_id', async(req, res) => {
    const { student_id } = req.params;

    try {
       const [result] =  await connection.query(
            'SELECT * FROM student WHERE student_id = ?', [student_id]
     );

     if (result.length === 0) {
        res.status(404).json({ message: 'No student in system' });
     }

     return res.status(200).json({ user: result });
    } catch (err) {
           return res.status(500).json({ error: err.message });   
    }
});

router.put('/update/:student_id', async(req, res) => {
    try {
       const { student_id } = req.params;
       const { student_name, student_gender, student_age } = req.body;

         if (!student_age || !student_gender || !student_name || !student_id) {
           res.status(403).json({ message: 'Some fields are missing' });
         }

        //  * check student existance
        const [result] =  await connection.query(
            'SELECT * FROM student WHERE student_id = ?', [student_id]
         );

         if (result.length === 0) {
            res.status(404).json({ message: 'No student in system' });
         }

         await connection.query(
            'UPDATE student SET student_name = ?, student_gender = ?, student_age = ? WHERE student_id = ?',
             [student_name, student_gender, student_age, student_id]
         );

         return res.status(200).json({ message: 'User updated successfully'})
    } catch (err) {
        return res.status(500).json({error: err.message})
    }

})

router.delete('/delete/:student_id', async (req, res) => {
    try {
          const { student_id } = req.params;
          if (!student_id) {
              res.status(403).json({ message: 'Student id is requred' });
              return;
          }
    
          //  * check student existance
        const [result] =  await connection.query(
            'SELECT * FROM student WHERE student_id = ?', [student_id]
         );

         if (result.length === 0) {
            res.status(404).json({ message: 'No student in system' });
         }

         await connection.query(
            'DELETE FROM student WHERE student_id = ?', [student_id]
         );

         return res.status(200).json({ message: 'User deleted successfully' });
    }  catch (err) {
        return res.status(500).json({error: err.message})
    }
})
export default router