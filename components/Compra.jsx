import { useState } from "react";
import "../css/Compra.css"



function Compra() {



    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nome, setNome] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [produto, setProduto] = useState('');

    const Cpf = (event) => {
        setCpf(event.target.value);
    };
    const Endereco = (event) => {
        setEndereco(event.target.value);
    };
    const Nome = (event) => {
        setNome(event.target.value);
    };
    const Pagamento = (event) => {
        setPagamento(event.target.value);
    };
    const Produto = (event) => {
        setProduto(event.target.value);
    };

    const Resposta = (event) => {
        const dados = {
            NOME: nome,
            CPF: cpf,
            ENDEREÇO: endereco,
            PAGAMENTO: pagamento,
            PRODUTO: produto,
        };

        let mensagem = " DADOS DO PEDIDO INFORMADO, CLIQUE EM OK PARA COMFIRMAR PEDIDO :\n\n";
        for (let key in dados) {
            mensagem += `${key}: ${dados[key]}\n`;
        }
        window.alert(mensagem);

    };


    return (


        <form >
            <br></br>
            <br></br>
            <br></br>
            <label>
                <br></br>
                <input type="number" value={cpf} onChange={Cpf} placeholder="CPF:" required />
            </label>
            <br></br>
            <label>
                <br></br>
                <input type="text" value={endereco} onChange={Endereco} placeholder="ENDEREÇO:" required />
            </label>
            <br></br>
            <label>
                <br></br>
                <input type="text" value={nome} onChange={Nome} placeholder="NOME COMPLETO:" required />
            </label>
            <br></br>
            <label >
                <br></br>
                <input type="text" value={pagamento} onChange={Pagamento} placeholder="PAG(Pix,Dineiro ou Cartão)" required />
            </label>
            <br></br>
            <label >
                <br></br>
                <input type="text" value={produto} onChange={Produto} placeholder="NOME DO PRODUTO:" required />
            </label>
            <br></br>
            <label>
                <br></br>
                <br></br>
                <button onClick={Resposta}> COMFIRMAR PEDIDO  </button>
                <br></br>
                <br></br>
            </label>
            <br></br>
        </form>

    );
}

export default Compra;