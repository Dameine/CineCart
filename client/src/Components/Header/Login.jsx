import React, { useState } from "react";
import s from "./login.module.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth"


const LogIn = ({openModalLogin}) => {
  const [loginUser] = useMutation(LOGIN_USER)


  const [form, setForm] = useState({ username: '', password: ''});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);   
    
    const response = await loginUser({
      variables: {
        username: form.username,
        password: form.password
      }
    })

    console.log(response)
    Auth.login(response.data.login.token)

  };

  return (
  <div className={s.backDrop}>
    <div className={s.modal}>
      <p>Log in</p>
      <button className={s.closeBtn} onClick={openModalLogin}>X</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Your Username"
          required
          onChange={handleChange}
          onBlur={() => {
            if(form.name == "") {
              document.getElementById("name-notice").style.display = "block"
            } else {
              document.getElementById("name-notice").style.display = "none"
            }
          }}
        />
        <p className="notice" id="name-notice">Name cannot be empty!</p>
        <hr/>

        <input
          type="password"
          name="password"
          placeholder="Your Password"
          required
          onChange={handleChange}
        />
        <p className="notice" id="email-notice">Password cannot be empty!</p>
        <hr/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
