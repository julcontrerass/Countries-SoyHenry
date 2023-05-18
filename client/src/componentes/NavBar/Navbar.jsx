import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import logo from "./logoHome.png";
import style from "./Navbar.module.css";
import useWindowDimensions from "../Hook/useWindowsDimensions";

function Navbar({ setInput, setPag }) {
  const { width } = useWindowDimensions();
  const movil = 460;
  if (width > movil) {
    return (
      <nav className={style.contenedor}>
        <div>
          <Link to="/">
            <img className={style.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <Search setInput={setInput} setPag={setPag} />
        </div>
        <div>
          <Link to="/activity" className={style.textCreate}>
            <button className={style.nuevaActividad}>CREATE A NEW ACTIVITY</button>
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={style.contenedor}>
        <div>
          <Link to="/">
            <img className={style.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <Search setInput={setInput} setPag={setPag} />
        </div>
        <div>
          <Link to="/activity" className={style.textCreate}>
            <button className={style.nuevaActividad}>NEW ACTIVIY</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
