import './objetivos.css'
import missao from "../../img/missao.png"
import servico from "../../img/servico.png"
import visao from "../../img/visao.png"
import { FaAnglesRight } from "react-icons/fa6"

function objetivos() {
    return (
        <div className='containerObjetivos'>
            <div className='boxObjetivos'>
                <img src={missao} />
                <h1>Missão</h1><br></br>
                <p>Oferecer serviços contábeis com excelência e ética, sempre focando em soluções eficazes para as necessidades de cada cliente.</p>
            </div>
            <div className='boxObjetivos'>
                <img src={visao} />
                <h1>Visão</h1><br></br>
                <p>Nosso propósito é ser uma contabilidade que vai além dos números, que compreende de forma humana, atenta e empática as necessidades reais de cada cliente, oferecendo soluções práticas e personalizadas.</p>
            </div>
            <div className='boxObjetivos'>
                <img src={servico} />
                <h1>Por que contratar nossos serviços?</h1><br></br>
                <ul>
                    <div id="texto">
                        <FaAnglesRight size={13} />
                        <li>Equipe especializada e preparada pra te ajudar</li>
                    </div>

                    <div id="texto">
                        <FaAnglesRight size={13} />
                        <li> Experiência e dedicação</li>
                    </div>

                    <div id="texto">
                        <FaAnglesRight size={13} />
                        <li> Suporte contábil de qualidade</li>
                    </div>
                </ul>
            </div>
            <div id='buttonEntrarEmContato'><a ENTRAR EM CONTATO>ENTRAR EM CONTATO</a></div>

        </div>
    );
};

export default objetivos;