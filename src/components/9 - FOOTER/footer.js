import './footer.css'
import { FaWhatsapp, FaRegClock } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { useReveal } from "../../hooks/useReveal";

function Footer() {

    useReveal('.containerFooter', {duration: 1500, origin: 'bottom'})

    return (
        <footer className='footer'>
            <div className='containerFooter'>
                <div id='enderecoFooter'>
                    <address>
                        <p>K.R.O Consultoria Empresarial Previdenciaria Tributaria LTDA: 11.020.769/0001-98<br></br><br></br></p>

                        <h3><FiMapPin /> Unidade Betim</h3>
                        <p>Rua Inconfidência, 510 - Centro, Betim<br></br>
                            MG, 32600-100<br></br><br></br></p>

                        <h3><FiMapPin /> Unidade Contagem - "Somente Serviços Previdenciários"</h3>
                        <p>Rua Moassy, 48 - Novo Eldorado, Contagem<br></br>
                            MG, 32341-170<br></br></p>

                    </address>
                </div>

                <div id='contatoFooter' className='boxFooter'>
                    <h3>CONTATO</h3><br></br>
                    <a href='mailto:oscarcontabilidade@hotmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank'><FiMail /> OSCARCONTABILIDADE@HOTMAIL.COM</a><br></br>
                    <a href='https://wa.me/+5531988997860?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank'><FaWhatsapp /> WHATSAPP (Betim): +55 (31) 98899-7860</a><br></br>
                    <a href='https://wa.me/+5531988998144?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank'><FaWhatsapp /> WHATSAPP (Contagem): +55 (31) 98899-8144</a><br></br>
                    <a><FiPhone /> TELEFONE: (31) 3594-1294</a><br></br>
                    <br></br>
                    <a href='https://wa.me/+5531988997860' target='_blank'><FaWhatsapp size={35} /></a>
                    <a href='mailto:oscarcontabilidade@hotmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank'><FiMail size={35} /></a>
                    <span><FiPhone size={35} /></span>
                </div>

                <div id='informacoesFooter' className='boxFooter'>
                    <h3>INFORMAÇÕES</h3><br></br>
                    <div className='horario'>
                        <div className='horariosSegASex'>
                            <p>Seg. à Qui.:<br></br>
                                <FaRegClock /> 08h30 às 12h00
                                <br></br>
                                <FaRegClock /> 14h00 às 18h00</p>
                        </div>
                        <div className='horariosSexta'>
                            <p>Sex.:<br></br>
                                <FaRegClock /> 08h30 às 12h00
                                <br></br>
                                <FaRegClock /> 14h00 às 17h00</p>
                        </div>
                    </div>
                </div>

                <div id='navegacaoFooter' className='boxFooter'>
                    <h3>NAVEGAÇÃO</h3><br></br>
                    <ul>
                        <li><a href='#sobreNos'><PiCaretDoubleRightDuotone /> Sobre nós</a></li>
                        <li><a href='#servicos'><PiCaretDoubleRightDuotone /> Serviços</a></li>
                        <li><a href=''><PiCaretDoubleRightDuotone /> Especialidades</a></li>
                        <li><a href='#documentos'><PiCaretDoubleRightDuotone /> Documentos</a></li>
                        <li><a href='#contato'><PiCaretDoubleRightDuotone /> Contato</a></li>
                    </ul>
                </div>

            </div>

            <div id='copyright'><p>Copyright © 2025 - K.R.O Consultoria Empresaria Previdenciária Tributaria LTDA - Todos os direitos reservados.</p></div>

        </footer>

    );
};

export default Footer;