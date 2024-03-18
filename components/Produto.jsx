import { useState, } from "react";
import "../css/Produto.css"
import Compra from "./Compra";

function Produto() {
    const [secaoAtual, setSecaoAtual] = useState('produtos');
    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };
    return (


        <div className="produtos" >
            <div className="artigosM">
                <h1> ARTIGOS PARA MOTOS </h1>
            </div>


            <div className="t">

                <div className="c">
                    <div>
                        <h1>Espelho Retrovisor</h1>
                    </div>
                    <div>
                        <h2>
                            cg160<br></br><br></br>
                            R$ 116,54</h2>
                        <img src="retrovisor.jpg" alt="retrovisor" />
                        <nav>
                            <button onClick={() => cliqueSecao('comprarR')} className="pp" >COMPRAR</button>
                        </nav>
                        <div>
                            {secaoAtual === 'comprarR' && (
                                <div className='secao'>
                                    <Compra />
                                    { }
                                </div>
                            )}
                        </div>
                    </div>


                </div>


                <div className="m1" >
                    <div >
                        <h1>Sinaleira Traseira</h1>
                    </div>
                    <div >
                        <h2>cg 150, cg 160<br></br><br></br>
                            R$ 142,11</h2>
                        <img src="sinaleira.jpg" alt="Sinaleira traseira" />
                        <nav>
                            <button onClick={() => cliqueSecao('comprarS')} className="pp" >COMPRAR</button>
                        </nav>
                        <div>
                            {secaoAtual === 'comprarS' && (
                                <div className='secao'>
                                    <Compra />
                                    { }
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div className="m2" >
                    <div className="bateria" >
                        <h1>Bateria DTZ5  12V A4h</h1>
                    </div>
                    <div >
                        <h2>biz 110i, cg 125, cg 160<br></br>
                            NXR 160, Pop 110i</h2>

                        <h2>R$ 574,64</h2>
                        <img src="bateria.jpg" alt="Bateria DTZ5  12V A4h" />
                        <nav>
                            <button onClick={() => cliqueSecao('comprarB')} className="pp" >COMPRAR</button>
                        </nav>
                        <div>
                            {secaoAtual === 'comprarB' && (
                                <div className='secao'>
                                    <Compra />
                                    { }
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div className="m3" >
                    <div >
                        <h1>Amortecedor Traseiro</h1>
                    </div>
                    <div >
                        <h2>cb 250F<br></br><br></br>
                            R$ 500,00</h2>
                        <img src="amortecedor.jpg" alt="Amortecedor Traseiro" />
                        <nav>
                            <button onClick={() => cliqueSecao('comprarA')} className="pp" >COMPRAR</button>
                        </nav>
                        <div>
                            {secaoAtual === 'comprarA' && (
                                <div className='secao'>
                                    <Compra />
                                    { }
                                </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>

            <div className="artigosB">
                <h1>ARTIGOS PARA BICICLETAS</h1>
            </div>

            <div className="bw">

                <div className="q">
                    <div>
                        <h1>Garrafa Isotherm </h1>
                    </div>
                    <div>
                        <h2>
                            R$ 25,00</h2>
                        <img src="garrafa.jpg" alt="Garrafa Isotherm" />
                        <nav>
                            <button onClick={() => cliqueSecao('comprarG')} className="pp" >COMPRAR</button>
                        </nav>
                        <div>
                            {secaoAtual === 'comprarG' && (
                                <div className='secao'>
                                    <Compra />
                                    { }
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div className="w">
                    <div className="r">
                        <div>
                            <h1>Pisca Elleven light </h1>
                        </div>
                        <div>
                            <h2>
                                R$ 69,00</h2>
                            <img src="pisca.jpg" alt="Pisca Elleven light" />
                            <nav>
                                <button onClick={() => cliqueSecao('comprarP')} className="pp" >COMPRAR</button>
                            </nav>
                            <div>
                                {secaoAtual === 'comprarP' && (
                                    <div className='secao'>
                                        <Compra />
                                        { }
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>
                </div>

                <div className="w">
                    <div className="r">
                        <div>
                            <h1>Cadeado Elleven<br></br> (100cm/15mm)</h1>
                        </div>
                        <div>
                            <h2> R$ 80,00</h2>
                            <img src="cadeado.jpg" alt="Cadeado Elleven" />
                            <nav>
                                <button onClick={() => cliqueSecao('comprarC')} className="pp" >COMPRAR</button>
                            </nav>
                            <div>
                                {secaoAtual === 'comprarC' && (
                                    <div className='secao'>
                                        <Compra />
                                        { }
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w">
                    <div className="r">
                        <div>
                            <h1>Bicicleta Aro 29<br></br> Aço Carbono Ksvj </h1>
                        </div>
                        <div>
                            <h2> R$ 800,00</h2>
                            <img src="shopping.webp" alt="Bicicleta Aro 29 Aço Carbono Ksvj " />
                            <nav>
                                <button onClick={() => cliqueSecao('comprarBK')} className="pp" >COMPRAR</button>
                            </nav>
                            <div>
                                {secaoAtual === 'comprarBK' && (
                                    <div className='secao'>
                                        <Compra />
                                        { }
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}
export default Produto;