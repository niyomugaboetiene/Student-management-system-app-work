import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateComponent = () => {
   const [student_name, setStudent_name] = useState("");  
   const [student_gender, setStudent_gender] = useState("");  
   const [student_age, setStudent_age] = useState("");  
   const [student_ids, setStudent_id] = useState("");  
   const [message, setMessage] = useState("");
   const [error, setError] = useState("");
   const { student_id } = useParams();

    useEffect(() => {
        const HandleSelectUser = async() => {
            try {
               const res = await axios.get(`http://localhost:5000/student/studentList/${student_id}`);
               if (res.data.user.length === 0) {
                setMessage("No one here");
               }

               setStudent_name(res.data.user.student_name)
               setStudent_age(res.data.user.student_age)
               setStudent_gender(res.data.user.student_gender)
               setStudent_id(res.data.user.student_id)
            } catch (err) {
            setError(err.message);   
        }
        } 

        HandleSelectUser();
    }, []);

    return (
     <div>
        <div>
            <label htmlFor="">Student Id</label>
            <input type="text" value={student_ids} onChange={(e) => setStudent_id(e.target.value)} readOnly/>
        </div>
        <div>
            <label htmlFor="">Student name</label>
            <input type="text" value={student_name} onChange={(e) => setStudent_name(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Student gender</label>
            <input type="text" value={student_gender} onChange={(e) => setStudent_gender(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Student age</label>
            <input type="text" value={student_age} onChange={(e) => setStudent_age(e.target.value)}/>
        </div>

        <button>Update</button>

        {message && (
            <p>{message}</p>
        )}
        {error && (
            <p>{error}</p>
        )}
    </div>
    )
}

export default UpdateComponent