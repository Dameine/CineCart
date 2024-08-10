import React, { useState } from "react";
import s from "./login.module.css";


const LogIn = ({openModalLogin}) => {
  const [form, setForm] = useState({ username: '', password: ''});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);    
  };

  return (
  <div className={s.backDrop}>
    <div className={s.modal}>
      <p>Log in</p>
      <button className={s.closeBtn} onClick={openModalLogin}>X</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
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
