import Login from "./Login";
import Register from "./Register";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Auth(){
    const navigate = useNavigate();
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if(userInfo) navigate("/welcome");
    }, []);
    return (
        <div className="auth-container">
            <Register />
            <Login />
        </div>
    )
}

export default Auth;