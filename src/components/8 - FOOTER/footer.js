import './footer.css'
import { FaWhatsapp, FaRegClock } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { useReveal } from "../../hooks/useReveal";

function Footer() {

    useReveal('.containerFooter', { duration: 1500, origin: 'bottom' })

    return (
        <footer className='footer'>
            <div className='containerFooter'>
                <div id='enderecoFooter'>

                    <p>K.R.O Consultoria Empresarial Previdenciaria Tributaria LTDA: 11.020.769/0001-98<br></br><br></br></p>

                    <h3><FiMapPin /> Unidade Betim</h3>
                    <p>Rua Inconfidência, 510 - Sala 202 - Centro, Betim<br></br>
                        MG, 32600-100<br></br><br></br></p>

                    <h3><FiMapPin /> Unidade Contagem</h3>
                    <p>Rua Moassy, 48 - Novo Eldorado, Contagem<br></br>
                        MG, 32341-170<br></br></p>
                </div>

                <div id='contatoFooter' className='boxFooter'>
                    <h3>CONTATO</h3><br></br>
                    <div className='desktop'>
                        <p>TELEFONE: (31) 3594-1294<br></br></p>
                        
                        <p>EMAIL:</p>
                        <div id = 'espacamento' className='email'>
                            <a href='mailto:oscarcontabilidade@hotmail.com?subject=Contato via Site %E2%80%93 K.R.O. Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank' rel='noopener noreferrer'>oscarcontabilidade@hotmail.com (Betim)</a><br></br>
                            <a href='mailto:oscarcontabilidade2009@gmail.com?subject=Contato via Site %E2%80%93 K.R.O. Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank' rel='noopener noreferrer'>oscarcontabilidade2009@gmail.com (Contagem)</a><br></br>
                        </div>
                        <p>WHATSAPP:</p>
                        <div  className='whats'>
                            <a href='https://wa.me/+5531988997860?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank' rel='noopener noreferrer'>+55 (31) 98899-7860 (Betim)</a><br></br>
                            <a href='https://wa.me/+5531988998144?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank' rel='noopener noreferrer'>+55 (31) 98899-8144 (Contagem)</a><br></br>
                        </div>
                    </div>

                    <div className='mobile-430'>
                        <p>TELEFONE:<br></br></p>
                        <p id = 'espacamento'><FiPhone /> (31) 3594-1294</p>
                        <p>EMAIL:</p>
                        <div id = 'espacamento' className='email'>
                            <a href='mailto:oscarcontabilidade@hotmail.com?subject=Contato via Site %E2%80%93 K.R.O. Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank' rel='noopener noreferrer'><FiMail /> Betim</a><br></br>
                            <a href='mailto:oscarcontabilidade2009@gmail.com?subject=Contato via Site %E2%80%93 K.R.O. Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank' rel='noopener noreferrer'><FiMail /> Contagem</a><br></br>
                        </div>
                        <p>WHATSAPP:</p>
                        <div id = 'espacamento' className='whats'>
                            <a href='https://wa.me/+5531988997860?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank' rel='noopener noreferrer'><FaWhatsapp /> Betim</a><br></br>
                            <a href='https://wa.me/+5531988998144?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank' rel='noopener noreferrer'><FaWhatsapp /> Contagem</a><br></br>
                        </div>
                    </div>
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
                            <p>Sexta:<br></br>
                                <FaRegClock /> 08h30 às 12h00
                                <br></br>
                                <FaRegClock /> 14h00 às 17h00</p>
                        </div>
                    </div>
                </div>



                <div id='navegacaoFooter' className='boxFooter'>
                    <h3>NAVEGAÇÃO</h3><br></br>
                    <ul>
                        <li><a href='#sobreNos' rel='alternate'><PiCaretDoubleRightDuotone /> Sobre nós</a></li>
                        <li><a href='#servicos' rel='alternate'><PiCaretDoubleRightDuotone /> Serviços</a></li>
                        <li><a href='#documentos' rel='alternate'><PiCaretDoubleRightDuotone /> Documentos</a></li>
                        <li><a href='#contato' rel='alternate'><PiCaretDoubleRightDuotone /> Contato</a></li>
                    </ul>
                </div>

            </div>

            <div id='copyright'><p>Copyright © 2025 - K.R.O Consultoria Empresaria Previdenciária Tributaria LTDA - Todos os direitos reservados.</p></div>

        </footer>

    );
};

export default Footer;