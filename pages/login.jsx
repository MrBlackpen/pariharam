import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/login", {email, password});
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (err){
            alert("Invalid credentials");
            console.error(err);
        }
    }
}

return (
    <div>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
    </div>
)
