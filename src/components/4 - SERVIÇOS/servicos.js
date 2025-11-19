import './servicos.css'
import inss from "../../img/inss.jpg"
import mei from "../../img/mei.jpg"
import simplesLucro from "../../img/lucroPresumido.jpg"
import { FaAnglesRight } from "react-icons/fa6"
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

    return (
        <section className='servicos' id='servicos'>
            <h1 className="servicos-titulo-principal">Nossos Serviços</h1>
            
            <div className='servico-container'>
                <div className={`servico-conteudo ${isMobile ? 'mobile' : ''}`}>
                    {isMobile && (
                        <div className="servico-imagem">
                            <img src={simplesLucro} alt="Serviços de Simples Nacional e Lucro Presumido" />
                        </div>
                    )}
                    <div className="servico-texto">
                        <h2>Simples Nacional / Lucro Presumido</h2>
                        <ul>
                            <li><FaAnglesRight /> Abertura de empresa</li>
                            <li><FaAnglesRight /> Baixa de empresa</li>
                            <li><FaAnglesRight /> Alterações Contratuais</li>
                            <li><FaAnglesRight /> Transformação em Sociedade Limitada</li>
                            <li><FaAnglesRight /> Transformação Sociedade Unipessoal Limitada</li>
                            <li><FaAnglesRight /> Migrar de MEI para Micro Empresa</li>
                            <li><FaAnglesRight /> Emissão de Notas Fiscais Eletrônica e Notas Fiscais de Serviço Eletrônica</li>
                            <li><FaAnglesRight /> Compensação Restituição ressarcimento de Créditos Tributários Federal</li>
                            <li><FaAnglesRight /> Processos Digitais: Administrativo tributário Federal ou Municipal</li>
                        </ul>
                        <div className='servico-botao'>
                            <a href="#contato">ABRIR EMPRESA</a>
                        </div>
                    </div>
                    {!isMobile && (
                        <div className="servico-imagem">
                            <img src={simplesLucro} alt="Serviços de Simples Nacional e Lucro Presumido" />
                        </div>
                    )}
                </div>
            </div>

            <div className='servico-container servico-meio'>
                <div className={`servico-conteudo ${isMobile ? 'mobile' : ''}`}>
                    <div className="servico-imagem">
                        <img src={mei} alt="Serviços para MEI e Pessoa Física" />
                    </div>
                    <div className="servico-texto">
                        <h2>MEI / Pessoa Física</h2>
                        <ul>
                            <li><FaAnglesRight /> DIRPF</li>
                            <li><FaAnglesRight /> GCAP</li>
                            <li><FaAnglesRight /> CARNÊ LEÂO</li>
                            <li><FaAnglesRight /> MENSALÃO</li>
                            <li><FaAnglesRight /> MALHA FISCAL</li>
                            <li><FaAnglesRight /> DITR</li>
                            <li><FaAnglesRight /> CCIR</li>
                            <li><FaAnglesRight /> Processos Digitais: Administrativo e Tributário Federal ou Municipal</li>
                            <li><FaAnglesRight /> Distribuição de lucros na regra do MEI</li>
                            <li><FaAnglesRight /> Confecção de Folha de pagamento para MEI</li>
                            <li><FaAnglesRight /> Pedido de Restituição</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='servico-container'>
                <div className={`servico-conteudo ${isMobile ? 'mobile' : ''}`}>
                    {isMobile && (
                        <div className="servico-imagem">
                            <img src={inss} alt="Serviços Previdenciários INSS" />
                        </div>
                    )}
                    <div className="servico-texto">
                        <h2>Previdenciário – INSS</h2>
                        <ul>
                            <li><FaAnglesRight /> Aposentadoria</li>
                            <li><FaAnglesRight /> Auxilio Doença</li>
                            <li><FaAnglesRight /> Auxilio Acidente</li>
                            <li><FaAnglesRight /> Pensão por Morte</li>
                            <li><FaAnglesRight /> Salário Maternidade</li>
                            <li><FaAnglesRight /> Análise e acerto de CNIS</li>
                            <li><FaAnglesRight /> Planejamento Previdenciário</li>
                            <li><FaAnglesRight /> Revisão/ recurso Administrativo</li>
                        </ul>
                    </div>
                    {!isMobile && (
                        <div className="servico-imagem">
                            <img src={inss} alt="Serviços Previdenciários INSS" />
                        </div>
                    )}
                </div>
                

            </div>
                            <div className="servico-observacao">
                    <p>TODOS SERVIÇOS PREVIDENCIÁRIOS SERÃO PRESTADOS SOMENTE NO ENDEREÇO DE CONTAGEM</p>
                </div>
        </section>
    );
};

export default Servicos;