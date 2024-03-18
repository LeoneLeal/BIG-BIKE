import { useState } from "react";
import "../css/Agenda.css"

function Agenda() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [nomeVeiculo, setNomeVeiculo] = useState('');
    const [servico, setTipoServico] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    const Email = (event) => {
        setEmail(event.target.value);
    };
    const Senha = (event) => {
        setSenha(event.target.value);
    };
    const Nome = (event) => {
        setNome(event.target.value);
    };
    const Veiculo = (event) => {
        setNomeVeiculo(event.target.value);
    };
    const TipoServico = (event) => {
        setTipoServico(event.target.value);
    };
    const Telefone = (event) => {
        setTelefone(event.target.value);
    };
    const Data = (event) => {
        setData(event.target.value);
    };
    const Hora = (event) => {
        setHora(event.target.value);
    };
    const Resposta = (event) => {

        const dados = {
            EMAIL: email,
            SENHA: senha,
            NOME: nome,
            VEICULO: nomeVeiculo,
            SERVIÇO: servico,
            TELEFONE: telefone,
            DATA: data,
            HORÁRIO: hora
        };


        let mensagem = "DADOS DE SERVIÇO INFORMADO, CLIQUE EM OK PARA COMFIRMAR AGENDAMENTO:\n\n";
        for (let key in dados) {
            mensagem += `${key}: ${dados[key]}\n`;
        }
        window.alert(mensagem);
    };

    return (

        <center>

            <div className="agenda">
                <div className="horario">
                    <h2> FUNCIONAMENTO </h2>
                    <h2>Segunda a Sexta</h2>
                    <h2>07:30 às 12:00</h2>
                    <h2>13:30 às 17:00</h2>
                    <h2> Sábado </h2>
                    <h2> 07:30 às 15:00 </h2>
                </div>
                <div className="formulario">

                    <form >
                        <label>
                            <br></br>
                            <input type="text" value={email} onChange={Email} placeholder="E-MAIL:" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="password" value={senha} onChange={Senha} placeholder="SENHA:" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="text" value={nome} onChange={Nome} placeholder="NOME COMPLETO:" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="text" value={nomeVeiculo} onChange={Veiculo} placeholder="ID VEÍCULO:" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="text" value={servico} onChange={TipoServico} placeholder="TIPO DE SERVIÇO:" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="number" value={telefone} onChange={Telefone} placeholder="TELEFONE CLIENTE:" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="date" value={data} onChange={Data} required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <input type="time" value={hora} onChange={Hora} required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            <button onClick={Resposta}> ENVIAR FORMULÁRIO DE SERVIÇO </button>
                        </label>
                    </form>
                </div>



            </div>

        </center>
    );
}
export default Agenda;