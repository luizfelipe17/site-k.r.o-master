import './sobreNos.css'
import fundoSobreNos from "../../img/fundoSobreNos.png"
import contador from "../../img/CONTADOR.png"

function sobreNos() {
    return (
        <section id='sobreNos' className='sobreNos' style={{ backgroundImage: `url(${fundoSobreNos})` }}>
            <div className='tituloSobreNos'>
                <h1>SOBRE NóS</h1>
            </div>
            <div className='containerSobreNos'>
                <p>A K.R.O Consultoria Empresarial Previdenciária Tributaria Ltda, conhecida como Oscar Contabilidade, possui mais de 25 anos de experiência no mercado, oferecendo serviços contábeis com ética, dedicação e foco na resolução de problemas.
                    Atuamos com empresas de diferentes portes e segmentos, sempre com um atendimento próximo e humanizado. Oferecendo um suporte completo, técnico e confiável em cada etapa.
                    Nosso trabalho vai além do cumprimento de obrigações fiscais. Atuamos de forma consultiva, buscando eficiência, economia e transparência, para que cada decisão seja tomada com segurança e visão de futuro.
                </p>
                <img className='imgContador' src={contador} />
            </div>
        </section>
    );
};
export default sobreNos;