import { useState } from "react";
import "../css/menu.css"

function Menu() {
  return (
    <div className="comp">
      <div className="msg">!!! SEJA BEM-VINDO A BIG BIKE !!!</div>
      <div className="menu">
        <img src="loja.png" alt="loja" className="a" />

        <div className="info" >
          <div className="f"><h1> NOSSA LOJA FISÍCA, DENTRO  DO  TOP 3 DAS  MELHORES OFICINAS  DA CIDADE  DE ACAJUTIBA.
          </h1> </div>

        </div>

      </div>

    </div>

  )
}
export default Menu;