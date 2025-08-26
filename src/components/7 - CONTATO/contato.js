import './contato.css'
import whats from "../../img/WHATS.png"
import telefone from "../../img/TELEFONE.png"
import email from "../../img/EMAIL.png"

function contato() {
    return (
        <div id='contato' className="contato">
            <h1>Contatos</h1>

            <a href='mailto:oscarcontabilidade@gmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1,++Estou+entrando+em+contato+atrav%C3%A9s+do+site+da+K.R.O.+Consultoria+para+tirar+algumas+d%C3%BAvidas+sobre+os+servi%C3%A7os+oferecidos.++Fico+no+aguardo+do+retorno.+Obrigado!'>
                <img className="icones-contato" src={email} />
            </a>

            <img className="icones-contato" src={telefone} />

            <a href='https://wa.me/+5531988997860'>
                <img className="icones-contato" src={whats} />
            </a>

        </div>

    );
};

export default contato;