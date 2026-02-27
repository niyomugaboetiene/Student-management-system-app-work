import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectComponent = () => {
    const [studentInfo, setStudentInfo] = useState([]);
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")


    useEffect(async() => {
        try {
            const res = await axios.get("http://localhost:5000/student/studentList", {withCredentials: true}); 

            if (res.data.user.length === 0) {
                setMessage("No student in system");
            }

            setStudentInfo(res.data.user);
        } catch (err) {
            setError(err.message);
        }
    }, []);

    return (
        <div>
            <table border={2}>
                <tr>
                    <th>Student id</th>
                    <th>Student gender</th>
                    <th>Student age</th>
                </tr>
             
             {studentInfo.map((id, user) => {
                <div>
                    <tr key={id}>
                        <td>{user.student_id}</td>
                        <td>{user.student_gender}</td>
                        <td>{user.student_age}</td>
                    </tr>
                </div>
             })}
            </table>
        </div>
    )
}

export default SelectComponent