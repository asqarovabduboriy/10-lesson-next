import React, { useState,useEffect } from "react";
import "./Login.css";
import { usePostSignInMutation } from "../../context/usersApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const singin = {
  username: "mor_2314",
  password: "83r5^_",
};
const Login = () => {
    let navigate = useNavigate();
  const [login, setLogin] = useState(singin);

  const [postSingIn, { data, isSuccess, isError }] = usePostSignInMutation();
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', data.token);
      toast.success('Siz muvaffaqqiyatli kirdingiz');
      navigate('/admin');
    } else if (isError) {
      toast.error('Xatolik');
    }
  }, [isSuccess, isError, data, navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    postSingIn(login);
  };
  return (
    <>
      <div className="container">
        <div className="login">
          <form className="login_form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              required
              value={login.username}
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
              type="text"
              placeholder="Username"
            />
            <label>Password</label>
            <input
              required
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
