import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import s from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import Auth from "../../utils/auth";
// import SearchB from "../CinemaSearch/SearchB/SearchB";


const Header = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const openModalLogin = () => setLoginIsOpen(!loginIsOpen);
  const openModalSignup = () => setSignup(!signup);
  const location = useLocation();
  return (
    <header>
      <div className="container">
        <div className={s.headerContainer}>
          <h1 className={s.headerH1} as={Link} to='/'>CineCart</h1>
      

          {location.pathname !== `/` && (<button onClick={() => window.history.back()}>Go back</button>)}
 
          {/* <SearchB /> */}

          <ul className={s.buttonsList}>
            {Auth.loggedIn() ? (
              <li>
                <button className="auth-button logout-button" onClick={() => {Auth.logout()}}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <button className="auth-button login-button" type="button" onClick={openModalLogin}>
                    {" "}
                    Log In{" "}
                  </button>
                </li>
                <li>
                  <button className="auth-button signup-button" type="button" onClick={openModalSignup}>
                    {" "}
                    Signup{" "}
                  </button>
                </li>
              </>
            )}
            <li>
              <Link className="favorite-movies-link" to="/favoritemovies">Favorite Movies</Link>
            </li>
          </ul>
          {loginIsOpen && <Login openModalLogin={openModalLogin} />}
          {signup && <Signup openModalSignup={openModalSignup} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
