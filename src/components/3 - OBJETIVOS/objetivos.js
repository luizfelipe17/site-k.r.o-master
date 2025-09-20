import './objetivos.css'
import missao from "../../img/missao.png"
import servico from "../../img/servico.png"
import visao from "../../img/visao.png"
import { FaAnglesRight } from "react-icons/fa6"

function objetivos() {
    return (
        <>
            <div className='containerObjetivos'>
                <div className='boxObjetivos'>
                    <img src={missao} />
                    <h1>Missão</h1>
                    <p>Oferecer serviços contábeis com excelência e ética, sempre focando em soluções eficazes para as necessidades de cada cliente.</p>
                </div>
                <div className='boxObjetivos'>
                    <img src={visao} />
                    <h1>Visão</h1>
                    <p>Nosso propósito é ser uma contabilidade que vai além dos números, que compreende de forma humana, atenta e empática as necessidades reais de cada cliente, oferecendo soluções práticas e personalizadas.</p>
                </div>
                <div className='boxObjetivos'>
                    <img src={servico} />
                    <h1>Por que contratar nossos serviços?</h1>
                    <ul>

                        <li>  Equipe especializada e preparada pra te ajudar</li>
                        <li>  Experiência e dedicação</li>
                        <li>  Suporte contábil de qualidade</li>
                    </ul>
                </div>
            </div>

            <div className='buttonServicos'>
                <a href='#servicos'>SERVIÇOS</a>
            </div>
        </>
    );
};

export default objetivos;