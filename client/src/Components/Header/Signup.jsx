import { useState, useEffect } from "react";
import s from './login.module.css';
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { NEW_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

// define a functional component called Signup that receives a prop called openModalSignup.
const Signup = ({openModalSignup}) => {
  const [userform, setForm] = useState({ username: "", email: "", password: "" });
  const [addUser, { error }] = useMutation(NEW_USER);

  // useEffect(() => {
  //   if (error) {
  //     setShowAlert(true);
  //   } else {
  //     setShowAlert(false);
  //   }
  // }, [error]);
  // The handleChange function updates the form state when input values change.
  const handleChange = (e) => {
    // setForm({ 
    //   ...form, 
    //   [e.target.name]: e.target.value });
    const { name, value } = e.target;
    setForm({ ...userform, [name]: value });
    

  };

  //The handleSubmit function is called when the form is submitted. 
  // It prevents the default form behavior, checks form validity, and attempts to add a new user via the mutation.
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      const { data } = addUser({
        variables: { ...userform },
      });
      Auth.login(data.addUser.token);
    }
    catch (err) {
      console.error(err);
    }
    setForm({ 
      username: "", 
      email: "", 
      password: "" });

    // console.log(userform);
    
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
            name="username"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={userform.username}
            onBlur={() => {
              if (userform.username == "") {
                document.getElementById("name-notice").style.display = "block";
              } else {
                document.getElementById("name-notice").style.display = "none";
              }
            }}
          />
          <p className="notice" id="name-notice">
            Username cannot be empty!
          </p>
          <hr />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userform.email}
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
            value={userform.password}
            required
            onChange={handleChange}
          />
          <p className="notice" id="password-notice">
          password cannot be empty!
          </p>
          <hr />
          {/* <button type="submit">Submit</button> */}

          <Button
          disabled={
            !(
              userform.username &&
              userform.email &&
              userform.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        </form>
      </div>
    </div>
  );
};
export default Signup;