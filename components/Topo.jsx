import { useState } from "react";
import "../css/Topo.css";
import Servico from "./Servico";

import Produto from "./Produto";
import Menu from "./Menu";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Email from "./Email";
import Agenda from "./Agenda";

function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('home');
    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (



        <header>
            <center>
                <div className="foto">
                    <img src="logo.jpg" alt="logo" className="logo" />
                    <h1>BIG BIKE</h1>
                    <img src="bicicleta.png" alt="bike" className="bicicleta" />
                </div>
            </center>



            <center>
                <div className="lista">
                    <nav>
                        <ul>
                            <button onClick={() => cliqueSecao('home')} className="botao">HOME</button>
                            <button onClick={() => cliqueSecao('servico')} className="botao">SERVIÇOS</button>
                            <button onClick={() => cliqueSecao('produtos')} className="botao" >PRODUTOS</button>
                            <button onClick={() => cliqueSecao('sobre')} className="botao" >SOBRE NÓS</button>
                            <button onClick={() => cliqueSecao('contato')} className="botao" >CONTATO</button>
                            <button onClick={() => cliqueSecao('email')} className="botao" >E-MAIL</button>
                            <button onClick={() => cliqueSecao('agenda')} className="botao" >AGENDAMENTO DE SERVIÇO</button>



                        </ul>

                    </nav>
                </div>
            </center>


            <div>
                {secaoAtual === 'home' && (
                    <div className='secao'>
                        <Menu />
                        { }
                    </div>
                )}
                {secaoAtual === 'servico' && (
                    <div className='secao'>
                        <Servico />
                        { }
                    </div>
                )}
                {secaoAtual === 'produtos' && (
                    <div className='secao'>
                        <Produto />
                        { }
                    </div>
                )}
                {secaoAtual === 'sobre' && (
                    <div className='secao'>
                        <Sobre />
                        { }
                    </div>
                )}
                {secaoAtual === 'contato' && (
                    <div className='secao'>
                        <Contato />
                        { }
                    </div>
                )}
                {secaoAtual === 'email' && (
                    <div className='secao'>
                        <Email />
                        { }
                    </div>
                )}
                {secaoAtual === 'agenda' && (
                    <div className='secao'>
                        <Agenda />
                        { }
                    </div>
                )}
            </div>

        </header>


    );

}
export default Topo;