import './sobreNos.css'
import { useReveal } from "../../hooks/useReveal";
import contador from "../../img/CONTADOR.png"

function SobreNos() {

    useReveal('.sobreNos', {duration: 1500,distance: "10px", origin: 'left'})
    useReveal('.imgContador', {duration: 1500, distance: "10px", origin: "right"})

    return (
        <section id='sobreNos' className='containerSobreNos'>
            <div className='sobreNos'>
                <h1>Sobre Nós</h1>
                <p>A K.R.O Consultoria Empresarial Previdenciária e Tributária Ltda, conhecida como Oscar Contabilidade, possui mais de 25 anos de experiência no mercado, oferecendo serviços contábeis com ética, dedicação e foco na solução eficiente de problemas.
                    Atuamos com empresas de diversos portes e segmentos, sempre prezando por um atendimento próximo, humanizado e transparente. Nosso suporte é completo e altamente técnico, acompanhando cada etapa do processo contábil com responsabilidade e confiabilidade.
                    Mais do que cumprir obrigações fiscais, trabalhamos de forma consultiva, buscando eficiência, economia e uma gestão contábil estratégica. Nosso compromisso é garantir segurança, clareza e visão de futuro para que cada cliente tome as melhores decisões para o crescimento de seu negócio.</p>
            </div>
            <div>
                <img className='imgContador' src={contador} />
            </div>
        </section>
    );
};
export default SobreNos;