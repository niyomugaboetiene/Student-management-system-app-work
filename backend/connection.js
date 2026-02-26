import mysql from "mysql2/promise"

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_management_system_app',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});


async function TestConnection() {
    try {
        connection.getConnection()
        console.log('Connected successfully');
        connection.releaseConnection();
    } catch (err) {
        console.log('Error during connection', err);
    }
}

TestConnection();

export default connection