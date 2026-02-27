import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateComponent = () => {
   const [student_name, setStudent_name] = useState("");  
   const [student_gender, setStudent_gender] = useState("");  
   const [student_age, setStudent_age] = useState("");  
   const [message, setMessage] = useState("");
   const [error, setError] = useState("");
   const student_id = useParams();

    useEffect(() => {
        const handleSelectUser = async() => {
            try {
               const res = await axios.get(`http://localhost:5000/student/studentList/${student_id}`);
               if (res.data.user.length == 0) {
                setMessage("No one here")
               }
            }

        }
    })
}