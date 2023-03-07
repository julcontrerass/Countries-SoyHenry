import React from "react";
import style from "./Paginacion.module.css";
import atras from "./atras-01.png";
import adelante from "./adelante-01.png";

function Paginacion({ pag, setPag, max, input, setInput }) {
  const nextPage = () => {
    if (input + 1 <= max) {
      setInput(input + 1);
      setPag(pag + 1);
    }
  };

  const prevPage = () => {
    if (input - 1 >= 1) {
      setInput(input - 1);
      setPag(pag - 1);
    }
  };

  function handlePagination(e) {
    if (e.target.value <= max && e.target.value >= 0) {
      setInput((input = e.target.value));
      setPag(e.target.value);
    } else {
      alert(
        `The number of Pagaginas must be greater than or equal to 1 and quenor or equal to ${max}`
      );
    }
  }

  return (
    <div className={style.contenedor}>
      {input === 1 ? (
        <span className={style.hiddenButton}></span>
      ) : (
        <button className={style.anterior} onClick={prevPage}>
          <img src={atras} className={style.atras} alt="button atras" />
        </button>
      )}
      <input
        className={style.inputNumber}
        max={max}
        min="1"
        name="pag"
        autoComplete="off"
        value={input}
        onChange={(e) => handlePagination(e)}
      />
      <button className={style.numeros}>of {max}</button>
      {input === max ? (
        <div className={style.hiddenButtonAdelante}></div>
      ) : (
        <button className={style.siguiente} onClick={nextPage}>
          <img
            src={adelante}
            className={style.adelante}
            alt="button siguiente"
          />
        </button>
      )}
    </div>
  );
}

export default Paginacion;
