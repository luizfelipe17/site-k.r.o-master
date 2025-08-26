import './sobreNos.css'
import fundoSobreNos from "../../img/fundoSobreNos.png"
import contador from "../../img/CONTADOR.png"

function sobreNos() {
    return (
        <div id='sobreNos' className='sobreNos'>
            <img className='imgFundoSobreNos' src={fundoSobreNos} />
            <p>Sobre Nós<br></br>A K.R.O Consultoria Empresarial Previdenciária Tributaria Ltda, conhecida como Oscar Contabilidade, possui mais de 25 anos de experiência no mercado, oferecendo serviços contábeis com ética, dedicação e foco na resolução de problemas.
                Atuamos com empresas de diferentes portes e segmentos, sempre com um atendimento próximo e humanizado. Oferecendo um suporte completo, técnico e confiável em cada etapa.
                Nosso trabalho vai além do cumprimento de obrigações fiscais. Atuamos de forma consultiva, buscando eficiência, economia e transparência, para que cada decisão seja tomada com segurança e visão de futuro.
            </p>

            <img className='imgContador' src={contador} />
        </div>
    );
};
export default sobreNos;