import React, {useState, useEffect} from "react";
import API from "../api/axios";

const DashBoard =() => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        API.get('/dashboard')
        .then((res)=>{setMessage(res.data.message)})
        .catch((err)=>{console.log("Error: ", err)})
    }, []);

    return (
        <div>
            <h1>YOU ARE IN DASHBOARD</h1>
            <p>{message}</p>
        </div>
    )
}

export default DashBoard;