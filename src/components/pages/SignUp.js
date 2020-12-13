import React from "react";
import "../../App.css";
// import { Button } from "../Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="sign-up">
      <div className="main-container">
        <div className="upper-container">
          <h3>Looking To Buy Products</h3>
          {/* <Link className="click btn--large" to="/">
            Click Here
          </Link> */}
          <Link to="/">
            <button src="/" className="btns btn--outline btn--large mar-left">
              Register?
            </button>
          </Link>
        </div>
        <div className="lower-container">
          {/* <Link to="/">
            <button src="/" className="btns btn--outline btn--large">
              Register?
            </button>
          </Link> */}
          <Link to="/">
            <button className="btns btn--outline btn--large">Employee?</button>
          </Link>
          <Link to="/">
            <button className="btns btn--outline btn--large">Supplier?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
