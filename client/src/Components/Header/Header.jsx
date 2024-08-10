import React, { useState } from "react";
import Login from "./Login";
import Signup from './Signup'
import s from "./header.module.css";
import {Link} from 'react-router-dom'

const Header = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const openModalLogin = () => setLoginIsOpen(!loginIsOpen);
  const openModalSignup = () => setSignup(!signup);
  return (
    <header>
      <div className="container">
        <div className={s.headerContainer}>
          <h1>CineCart</h1>
          <ul>
            <li>
              <button type="button" onClick={openModalLogin}>
                {" "}
                Log In{" "}
              </button>
            </li>
            <li>
              <button type="button" onClick={openModalSignup}> Signup </button>
            </li>
            <li>
          <Link to='/favoritemovies'>Favorite Movies</Link>
            </li>
          </ul>
          {loginIsOpen && <Login openModalLogin={openModalLogin} />}
          {signup && <Signup openModalSignup={openModalSignup}/>}
        </div>
      </div>
    </header>
  );
};

export default Header;
