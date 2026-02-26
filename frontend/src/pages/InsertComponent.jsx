import axios from "axios"
import { useState } from "react"

const InsertComponent = () => {
   const [student_name, setStudent_name] = useState("");  
   const [student_gender, setStudent_gender] = useState("");  
   const [student_age, setStudent_age] = useState("");  
   const [message, setMessage] = useState("");
   const [error, setError] = useState("");

   const HandleInsert = async() => {
    try {
        const res = await axios.post('http://localhost:5000/student/addStudent', {student_age, student_name, student_gender}, {withCredentials: true});
        setMessage(res.data.message);
        setStudent_age("")
        setStudent_gender("")
        setStudent_name("");
    } catch (err) {
        setError(err.message);
    }
   }


   return (
    <div>
        <div>
            <label htmlFor="">Student name</label>
            <input type="text" onChange={(e) => setStudent_name(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Student gender</label>
            <input type="text" onChange={(e) => setStudent_gender(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Student age</label>
            <input type="text" onChange={(e) => setStudent_age(e.target.value)}/>
        </div>

        <button onClick={HandleInsert}>Insert</button>

        {message && (
            <p>{message}</p>
        )}
        {error && (
            <p>{error}</p>
        )}
    </div>
   )
}

export default InsertComponent