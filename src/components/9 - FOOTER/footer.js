import './footer.css'
import { FaWhatsapp, FaRegClock } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

function footer() {
    return (
        <footer className='footer'>
            <br></br>
            <div className='containerFooter'>
                <div id='enderecoFooter'>
                    <address>
                        K.R.O Consultoria Empresarial Previdenciaria Tributaria LTDA: 11.020.769/0001-98<br></br><br></br>

                        <h3><FiMapPin /> Unidade Betim</h3>
                        R. Inconfidência, 510 - Centro, Betim<br></br>
                        MG, 32600-100<br></br><br></br>

                        <h3><FiMapPin /> Unidade Contagem - "Somente Serviços Previdenciários"</h3>
                        Rua Moassy, 48 - Novo Eldorado, Contagem<br></br>
                        MG, 32341-170<br></br>

                    </address>
                </div>

                <div id='contatoFooter' className='boxFooter'>
                    <h3>CONTATO</h3><br></br>
                    <a href='mailto:oscarcontabilidade@gmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1,++Estou+entrando+em+contato+atrav%C3%A9s+do+site+da+K.R.O.+Consultoria+para+tirar+algumas+d%C3%BAvidas+sobre+os+servi%C3%A7os+oferecidos.++Fico+no+aguardo+do+retorno.+Obrigado!' target='_blank'><FiMail /> OSCARCONTABILIDADE@GMAIL.COM</a><br></br>
                    <a href='https://wa.me/+5531988997860' target='_blank'><FaWhatsapp /> WHATSAPP: +55 (31) 98899-7860</a><br></br>
                    <a><FiPhone /> TELEFONE: (31) 3594-1294</a><br></br>
                    <br></br>
                </div>

                <div id='informacoesFooter' className='boxFooter'>
                    <h3>INFORMAÇÕES</h3><br></br>
                    <p><FaRegClock /> ATENDIMENTO: SEGUNDA A SEXTA,<br></br>DAS 09h00 ÀS 12h00 E DAS 14h00 ÀS 18h00.</p>

                </div>
            </div>

            <div id='copyright'>Copyright © 2025 - K.R.O Consultoria Empresaria Previdenciária Tributaria LTDA - Todos os direitos reservados.</div>

        </footer>

    );
};

export default footer;