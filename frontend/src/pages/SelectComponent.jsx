import React, { useEffect, useState } from "react";
import axios from "axios";
import { Router, Link } from "react-router-dom";

const SelectComponent = () => {
    const [studentInfo, setStudentInfo] = useState([]);
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")


    useEffect(() => {

      const fetchStudentInfo = async() => {
        try {
            const res = await axios.get("http://localhost:5000/student/studentList", {withCredentials: true}); 

            if (res.data.user.length === 0) {
                setMessage("No student in system");
            }

            // console.log(res.data.user)
            setStudentInfo(res.data.user);
        } catch (err) {
            setError(err.message);
        }
     }

     fetchStudentInfo()
    }, []);

    return (
        <div>
            <table border={2}>
                <thead>
                <tr>
                    <th>Student id</th>
                    <th>Student gender</th>
                    <th>Student age</th>
                </tr>
                </thead>

              <tbody>
             {studentInfo.map((user, id) => (
               <tr key={id}>
                  <td>{user.student_id}</td>
                  <td>{user.student_gender}</td>
                 <td>{user.student_age}</td>
                 <Link to={`/update/${user.student_id}`}>Update</Link>
                 <Link to={`/delete/${user.student_id}`}>Delete</Link>
               </tr>
             ))}
              </tbody>
            </table>
        </div>
    )
}

export default SelectComponent