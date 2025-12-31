import './aberturaEmpresa.css'
import { PiKeyLight, PiListChecksThin, PiUsersThreeThin, PiSignatureThin, PiMoneyWavyThin, PiEnvelopeSimpleThin, PiPhoneThin, PiCaretDoubleRightDuotone, PiIdentificationCardThin, PiFilesThin, PiFileTextThin, PiHandHeartThin, PiHouseLineThin } from "react-icons/pi";
import { useReveal } from "../../hooks/useReveal";
import imgAberturaEmpresa from "../../img/imgAberturaEmpresa.jpg"
import imagemMEI from "../../img/MEI.png"
import imagemSLU from "../../img/SLU.png"
import imagemLTDA from "../../img/LTDA.png"

function AberturaEmpresa() {

    useReveal('#box-efeitos-2', { duration: 1000, distance: "90px", delay: 200, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-3', { duration: 1000, distance: "90px", delay: 400, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-4', { duration: 1000, distance: "90px", delay: 600, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-5', { duration: 1000, distance: "90px", delay: 200, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-6', { duration: 500, distance: "90px", delay: 220, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-7', { duration: 500, distance: "90px", delay: 230, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-8', { duration: 500, distance: "90px", delay: 240, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-9', { duration: 500, distance: "90px", delay: 250, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-10', { duration: 500, distance: "90px", delay: 260, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-11', { duration: 500, distance: "90px", delay: 200, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-12', { duration: 500, distance: "90px", delay: 210, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-13', { duration: 500, distance: "90px", delay: 220, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-14', { duration: 500, distance: "90px", delay: 230, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-15', { duration: 500, distance: "90px", delay: 240, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-16', { duration: 500, distance: "90px", delay: 250, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-17', { duration: 500, distance: "90px", delay: 260, distance: "10px", origin: "bottom", reset: false })
    useReveal('#box-efeitos-18', { duration: 500, distance: "90px", delay: 270, distance: "10px", origin: "bottom", reset: false })

    return (
        <section id='documentos' className='aberturaEmpresas'>
            <div className='containerAberturaEmpresa'>

                <div className='imagem'>
                    <img src={imgAberturaEmpresa} alt="Documentos Abertura de Empresa" />
                </div>
                <div className="tituloAberturaEmpresa">
                    <h1>Documentos Necessários para Abertura de Empresa</h1>
                    <p>
                        Veja quais documentos são necessários para abrir sua empresa no Brasil.
                    </p>
                </div>
                <div className='boxAberturaEmpresas'>
                    <div className='classificacaoEmpresa'>
                        <div id="box-efeitos-2" className="boxClassificacaoEmpresa">
                            <img src={imagemMEI} alt="MEI" />
                            <h1>MEI</h1>
                            <h3>(Microempreendedor Individual)</h3>
                            <p>Único Empresário</p>
                        </div>
                        <div id="box-efeitos-3" className="boxClassificacaoEmpresa">
                            <img src={imagemSLU} alt="SLU" />
                            <h1>SLU</h1>
                            <h3>(Sociedade Limitada Unipessoal)</h3>
                            <p>Único Empresário</p>
                        </div>
                        <div id="box-efeitos-4" className="boxClassificacaoEmpresa">
                            <img src={imagemLTDA} alt="LTDA" />
                            <h1>LTDA</h1>
                            <h3>(Limitada)</h3>
                            <p>Dois ou mais sócios</p>

                        </div>
                    </div>
                </div>
                <div className="boxAberturaEmpresaTitulo">
                    <h2>Documentos Pessoais</h2>
                </div>
                <div className='linha'>
                    <div className='primeiraColuna'>
                        <div id="box-efeitos-5" className="boxAberturaEmpresaItens">
                            <PiIdentificationCardThin size={58} />
                            <h2>RG, CPF, CNH ou outro compatível</h2>
                        </div>
                        <div id="box-efeitos-6" className="boxAberturaEmpresaItens">
                            <PiHouseLineThin size={55} />
                            <h2>Comprovante de Endereço Residencial</h2>
                        </div>
                        <div id="box-efeitos-7" className="boxAberturaEmpresaItens">
                            <PiHandHeartThin size={65} />
                            <div className=''>
                                <h2>Certidão de Casamento dos sócios ou titular</h2>
                                <p>(Se casado)</p>
                            </div>
                        </div>
                    </div>
                    <div className='segundaColuna'>
                        <div id="box-efeitos-8" className="boxAberturaEmpresaItens">
                            <PiPhoneThin size={50} />
                            <h2>Telefone dos sócios ou titular</h2>
                        </div>
                        <div id="box-efeitos-9" className="boxAberturaEmpresaItens">
                            <PiEnvelopeSimpleThin size={55} />
                            <h2>E-mail dos sócios ou titular</h2>
                        </div>
                        <div id="box-efeitos-10" className="boxAberturaEmpresaItens">
                            <PiKeyLight size={50} />
                            <h2>Senha GOV</h2>
                        </div>
                    </div>
                </div>
                <div className='containerDocumentos'>
                    <div className="boxAberturaEmpresaTitulo">
                        <h2>Documentos da Empresa</h2>
                    </div>
                    <div className='linha'>
                        <div className='primeiraColuna'>
                            <div id="box-efeitos-11" className="boxAberturaEmpresaItens">
                                <PiFilesThin size={70} />
                                <h2>IPTU ou Inscrição Municipal</h2>
                            </div>
                            <div id="box-efeitos-12" className="boxAberturaEmpresaItens">
                                <PiFileTextThin size={65} />
                                <h2>Razão social da Empresa</h2>
                            </div>
                            <div id="box-efeitos-13" className="boxAberturaEmpresaItens">
                                <PiSignatureThin size={60} />
                                <h2>Nome fantasia da empresa</h2>
                            </div>
                            <div id="box-efeitos-14" className="boxAberturaEmpresaItens">
                                <PiListChecksThin size={55} />
                                <h2>Atividades da empresa</h2>
                            </div>
                        </div>
                        <div className='segundaColuna'>
                            <div id="box-efeitos-15" className="boxAberturaEmpresaItens">
                                <PiMoneyWavyThin size={55} />
                                <h2>Capital social da empresa</h2>
                            </div>
                            <div id="box-efeitos-16" className="boxAberturaEmpresaItens">
                                <PiUsersThreeThin size={50} />
                                <h2>Participação de cada sócio na empresa</h2>
                            </div>
                            <div id="box-efeitos-17" className="boxAberturaEmpresaItens">
                                <PiPhoneThin size={50} />
                                <h2>Telefone de contato da empresa</h2>
                            </div>
                            <div id="box-efeitos-18" className="boxAberturaEmpresaItens">
                                <PiEnvelopeSimpleThin size={55} />
                                <h2>E-mail de contato da empresa</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='containerObservacao'>
                    <div className="servico-observacao">
                        <li><PiCaretDoubleRightDuotone />Todos os documentos podem ser cópias</li>
                        <li><PiCaretDoubleRightDuotone />Orçamentos para abertura de empresa, favor entrar em contato por via <a href='https://wa.me/+5531988997860?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank' style={{ color: 'green' }}>WhatsApp</a></li>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AberturaEmpresa;