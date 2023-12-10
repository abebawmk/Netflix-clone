import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => handleShow(window.scrollY > 100));
  return () => window.removeEventListener("scroll", handleShow);
}, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar logo"
      />
    </div>
  );
}

export default Nav;
