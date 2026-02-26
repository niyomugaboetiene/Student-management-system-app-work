import mysql from "mysql2"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_management_system_app',
    queueLimit: 10
});

connection.connect((err) => {
    if (err) throw err
    console.log('Database connected successfully')
});