import { useState } from "react";
import s from './Login'
// import { Form, Button, Alert } from "react-bootstrap";
// import { useMutation } from "@apollo/client";
// import { NEW_USER } from "../utils/mutations";

const Signup = ({openModalSignup}) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

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
        <p>Sign up</p>
        <button className={s.closeBtn} onClick={openModalSignup}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={form.name}
            onBlur={() => {
              if (form.name == "") {
                document.getElementById("name-notice").style.display = "block";
              } else {
                document.getElementById("name-notice").style.display = "none";
              }
            }}
          />
          <p className="notice" id="name-notice">
            Name cannot be empty!
          </p>
          <hr />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={handleChange}
          />
          <p className="notice" id="email-notice">
            Email cannot be empty!
          </p>
          <hr />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            required
            onChange={handleChange}
          />
          <p className="notice" id="password-notice">
          password cannot be empty!
          </p>
          <hr />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;