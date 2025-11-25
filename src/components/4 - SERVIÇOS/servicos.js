import './servicos.css'
import { useReveal } from "../../hooks/useReveal";
import inss from "../../img/inss.jpg"
import mei from "../../img/mei.jpg"
import simplesLucro from "../../img/lucroPresumido.jpg"
import { PiCaretDoubleRightDuotone } from "react-icons/pi";

import { useState, useEffect } from "react"

function Servicos() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
        //!mobile
        useReveal('#servico-texto-efeito-esquerda', { duration: 1500, distance: "10px", origin: 'left' })
        useReveal('#servico-texto-efeito-direita', { duration: 1500, distance: "10px", origin: 'right' })
        useReveal('#servico-imagem-efeito-direita', { duration: 1500, distance: "10px", origin: 'right' })
        useReveal('#servico-imagem-efeito-esquerda', { duration: 1500, distance: "10px", origin: 'left' })

        // //mobile
        useReveal('#servico-imagem-efeito-mobile', { duration: 1500, distance: "10px", origin: 'right' })

    return (
        <section className='servicos' id='servicos'>
            <h1 className="servicos-titulo-principal">Nossos Serviços</h1>

            <div className='servico-container'>
                <div className={`servico-conteudo ${isMobile ? 'mobile' : ''}`}>
                    {isMobile && (
                        <div id = "servico-imagem-efeito-mobile" className="servico-imagem">
                            <img src={simplesLucro} alt="Serviços de Simples Nacional e Lucro Presumido" />
                        </div>
                    )}
                    <div id = "servico-texto-efeito-esquerda" className="servico-texto">
                        <h2>Simples Nacional / Lucro Presumido</h2>
                        <ul>
                            <li><PiCaretDoubleRightDuotone /> Abertura de empresa</li>
                            <li><PiCaretDoubleRightDuotone /> Baixa de empresa</li>
                            <li><PiCaretDoubleRightDuotone /> Alterações Contratuais</li>
                            <li><PiCaretDoubleRightDuotone /> Transformação em Sociedade Limitada</li>
                            <li><PiCaretDoubleRightDuotone /> Transformação Sociedade Unipessoal Limitada</li>
                            <li><PiCaretDoubleRightDuotone /> Migrar de MEI para Micro Empresa</li>
                            <li><PiCaretDoubleRightDuotone /> Emissão de Notas Fiscais Eletrônica e Notas Fiscais de Serviço Eletrônica</li>
                            <li><PiCaretDoubleRightDuotone /> Compensação Restituição ressarcimento de Créditos Tributários Federal</li>
                            <li><PiCaretDoubleRightDuotone /> Processos Digitais: Administrativo tributário Federal ou Municipal</li>
                        </ul>
                        <div className='servico-botao'>
                            <a href="#documentos">DOCUMENTOS PARA ABERTURA DE EMPRESA</a>
                        </div>
                    </div>
                    {!isMobile && (
                        <div id = "servico-imagem-efeito-direita" className="servico-imagem">
                            <img src={simplesLucro} alt="Serviços de Simples Nacional e Lucro Presumido" />
                        </div>
                    )}
                </div>
            </div>

            <div className='servico-container servico-meio'>
                <div className={`servico-conteudo ${isMobile ? 'mobile' : ''}`}>
                    <div id = "servico-imagem-efeito-esquerda" className="servico-imagem">
                        <img src={mei} alt="Serviços para MEI e Pessoa Física" />
                    </div>
                    <div id = "servico-texto-efeito-direita" className="servico-texto">
                        <h2>MEI / Pessoa Física</h2>
                        <ul>
                            <li><PiCaretDoubleRightDuotone /> DIRPF</li>
                            <li><PiCaretDoubleRightDuotone /> GCAP</li>
                            <li><PiCaretDoubleRightDuotone /> CARNÊ LEÂO</li>
                            <li><PiCaretDoubleRightDuotone /> MENSALÃO</li>
                            <li><PiCaretDoubleRightDuotone /> MALHA FISCAL</li>
                            <li><PiCaretDoubleRightDuotone /> DITR</li>
                            <li><PiCaretDoubleRightDuotone /> CCIR</li>
                            <li><PiCaretDoubleRightDuotone /> Processos Digitais: Administrativo e Tributário Federal ou Municipal</li>
                            <li><PiCaretDoubleRightDuotone /> Distribuição de lucros na regra do MEI</li>
                            <li><PiCaretDoubleRightDuotone /> Confecção de Folha de pagamento para MEI</li>
                            <li><PiCaretDoubleRightDuotone /> Pedido de Restituição</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='servico-container'>
                <div className={`servico-conteudo ${isMobile ? 'mobile' : ''}`}>
                    {isMobile && (
                        <div id = "servico-imagem-efeito-mobile" className="servico-imagem">
                            <img src={inss} alt="Serviços Previdenciários INSS" />
                        </div>
                    )}
                    <div id = "servico-texto-efeito-esquerda" className="servico-texto">
                        <h2>Previdenciário – INSS</h2>
                        <ul>
                            <li><PiCaretDoubleRightDuotone /> Aposentadoria</li>
                            <li><PiCaretDoubleRightDuotone /> Auxilio Doença</li>
                            <li><PiCaretDoubleRightDuotone /> Auxilio Acidente</li>
                            <li><PiCaretDoubleRightDuotone /> Pensão por Morte</li>
                            <li><PiCaretDoubleRightDuotone /> Salário Maternidade</li>
                            <li><PiCaretDoubleRightDuotone /> Análise e acerto de CNIS</li>
                            <li><PiCaretDoubleRightDuotone /> Planejamento Previdenciário</li>
                            <li><PiCaretDoubleRightDuotone /> Revisão / Recurso Administrativo</li>
                        </ul>
                        <div className="servico-observacao">
                            <p>Prestação de serviços previdenciários, com prioridade de atendimento no endereço de Contagem.</p>
                        </div>
                    </div>
                    {!isMobile && (
                        <div id = "servico-imagem-efeito-direita" className="servico-imagem">
                            <img src={inss} alt="Serviços Previdenciários INSS" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Servicos;