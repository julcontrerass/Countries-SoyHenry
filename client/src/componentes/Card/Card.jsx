import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import useWindowDimensions from "../Hook/useWindowsDimensions";

function Card({ flags, name, continents, id }) {
  const { width } = useWindowDimensions();
  const movil = 460;
  if (width > movil) {
    return (
      <div className={styles.borde}>
        <div className={styles.contenido}>
          <div>
            <img className={styles.imagen} src={flags} alt="flag" />
          </div>
          <div className={styles.pais}>
            <h4>{name}</h4>
          </div>
          <div>
            <p>{continents}</p>
          </div>
          <div className={styles.detalle}>
            {" "}
            <Link to={`/countries/${id}`}>
              <button className={styles.button}>DETAIL</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.movil_borde}>
        <div className={styles.movil_conteiner}>
          <div className={styles.movil_conteiner_img}>
            <img className={styles.movil_img} src={flags} alt="flag" />
          </div>
          <div className={styles.movil_detail_conteiner}>
            <div className={styles.movil_detail_name}>
              <h4>{name}</h4>
            </div>
            <div>
              <p>{continents}</p>
            </div>
            <div className={styles.movil_conteiner_button}>
              <Link to={`/countries/${id}`}>
                <button className={styles.movil_button}>+</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
