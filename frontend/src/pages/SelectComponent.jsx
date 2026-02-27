import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectComponent = () => {
    const [studentInfo, setStudentInfo] = useState([]);
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")


    useEffect(async() => {
        const res = await axios.get("") 
    })
}