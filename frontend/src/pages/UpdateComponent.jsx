import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateComponent = () => {
  const { student_id } = useParams();  
  const [student_ids, setStudent_id] = useState("");
  const [student_name, setStudent_name] = useState("");
  const [student_gender, setStudent_gender] = useState("");
  const [student_age, setStudent_age] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/student/studentList/${student_id}`);
        const user = res.data.user[0]
        if (!user) {
          setMessage("No one here");
          return;
        }

        setStudent_id(user.student_id || "");
        setStudent_name(user.student_name || "");
        setStudent_gender(user.student_gender || "");
        setStudent_age(user.student_age || "");
        // console.log("age", user?.student_age)
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStudent();
  }, [student_id]);

  return (
    <div>
      <div>
        <label>Student Id</label>
        <input type="text" value={student_ids} readOnly />
      </div>
      <div>
        <label>Student Name</label>
        <input type="text" value={student_name} onChange={(e) => setStudent_name(e.target.value)} />
      </div>
      <div>
        <label>Student Gender</label>
        <input type="text" value={student_gender} onChange={(e) => setStudent_gender(e.target.value)} />
      </div>
      <div>
        <label>Student Age</label>
        <input type="text" value={student_age} onChange={(e) => setStudent_age(e.target.value)} />
      </div>

      <button>Update</button>

      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default UpdateComponent;