import { useState } from 'react';
import axios from 'axios';
import './adminLogin.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    userName: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if(loginData.userName !== 0 && loginData.password !== 0) {
      axios.post('https://port-ind.herokuapp.com/adminlogin', loginData)
      .then((res) => setMessage(res.data.message))
    }
  }
  useEffect(() => {
    if(message === "Successful Login!") {
      localStorage.setItem('AdminData', {"Login": "true"})
      navigate('/adminpanel')
    } 
  },[message])
  return (
      <div className="Port_AdminLogin">
        <div className="Port_AdminLogin-header"><h1>Admin Login</h1></div>
          <div className="Port_AdminLogin-Form">
              <input onChange={(e) => setLoginData({...loginData, userName: e.target.value})} type="text" placeholder="Admin Name" />
              <input onChange={(e) => setLoginData({...loginData, password: e.target.value})}  type="password" placeholder="password" />
              <button onClick={() => handleSubmit()} >Submit</button>
              <div className="AdminLogin-message"><p>{message}</p></div> 
          </div>
      </div>
  )
};

export default AdminLogin;
