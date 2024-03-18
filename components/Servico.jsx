import { useState } from "react";
import "../css/Servico.css"

function Servico() {

    return (

        <center>
            <div className="serv">
                <div className="bike" >

                    <ul>
                        <div className="b">
                            <h1>  SERVIÇOS PARA BICICLETAS  </h1>
                        </div>
                        <li> Manutenção básica:</li>
                        <li>Ajustes :</li>
                        <li>Reparos e substituições de peças:</li>
                        <li>Manutenção avançada:</li>
                        <li>Serviços de rodas:</li>
                        <li>Serviços especializados:</li>
                        <li>Inspeção geral:</li>

                    </ul>
                </div>
                <div className="moto" >

                    <ul>
                        <div className="m">
                            <h1>  SERVIÇOS PARA MOTOS  </h1>
                        </div>
                        <li> Manutenção básica:</li>
                        <li>Ajustes :</li>
                        <li>Manutenção do sistema elétrico:</li>
                        <li>Serviços de motor:</li>
                        <li>Serviços de transmissão:</li>
                        <li>Inspeção geral:</li>
                    </ul>
                </div>
            </div>
        </center>

    )
}
export default Servico;