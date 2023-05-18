import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import logo from "./logoHome.png";
function Landing() {
  return (
    <div className={style.imagen}>
      <div className={style.contenedor}>
        <div className={style.countryLogo}>
          <div className={style.contenedorLogo}>
            <div>
              <p className={style.country}>KNOW THE COUNTRIES</p>
            </div>
            <div>
              <img src={logo} alt="logo" className={style.logo} />
            </div>
          </div>
        </div>
        <div className={style.home}>
          <Link to="/countries">
            <button className={style.button}>TRAVEL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
