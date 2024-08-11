import { useState } from "react";
// import s from '../layout/Header/login.module.css'
// import { Form, Button, Alert } from "react-bootstrap";
// import { useMutation } from "@apollo/client";
// import { NEW_USER } from "../utils/mutations";

const Signup = ({openModalSignup}) => {
  const [form, setForm] = useState({ name: "", email: "", pasword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder="Your Email"
            value={form.password}
            required
            onChange={handleChange}
          />
          <p className="notice" id="email-notice">
            Email cannot be empty!
          </p>
          <hr />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;