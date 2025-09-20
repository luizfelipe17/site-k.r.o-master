import './servicos.css'
import inss from "../../img/inss.jpg"
import mei from "../../img/mei.jpg"
import simplesLucro from "../../img/lucroPresumido.jpg"
import { FaAnglesRight } from "react-icons/fa6"

function servicos() {
    return (
        <section className='servicos' id='servicos'>
            <div className='containerSimplesLucro'>
                <div id="simplesLucro">
                    <h1>Serviços e Soluções - Simples Nacional / Lucro Presumido<br></br><br></br></h1>
                    <ul><li><FaAnglesRight /> Abertura de empresa</li>
                        <li><FaAnglesRight /> Baixa de empresa</li>
                        <li><FaAnglesRight /> Alterações Contratuais</li>
                        <li><FaAnglesRight /> Transformação em Sociedade Limitada</li>
                        <li><FaAnglesRight /> Transformação Sociedade Unipessoal Limitada</li>
                        <li><FaAnglesRight /> Migrar de MEI para Micro Empresa</li>
                        <li><FaAnglesRight /> Emissão de Notas Fiscais Eletrônica e Notas Fiscais de Serviço Eletrônica</li>
                        <li><FaAnglesRight /> Compensação Restituição ressarcimento de Créditos Tributários Federal</li>
                        <li><FaAnglesRight /> Processos Digitais: Administrativo tributário Federal ou Municipal</li>
                    </ul>
                </div>
                <div id='simplesLucroIMG'><img id="simplesLucroimg" src={simplesLucro} /></div>
            </div>

            <div id="buttonSimplesLucro">
                <a>ABRIR EMPRESA</a>
            </div>

            <div className='containerServicoSolucoes'>
                <div id='servicoSolucoesIMG'><img id="servicosSolucoesIMG" src={mei} /></div>
                <div id="servicoSolucoes">
                    <h1>Serviços e Soluções – MEI / Pessoa Física</h1> <br></br><br></br>
                    <ul><li><FaAnglesRight /> DIRPF</li>
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

            <div className='containerServicoPrevidenciario'>
                <div id="servicoPrevidenciario">  <h1>Serviços e Soluções - PREVIDENCIÁRIO – INSS</h1><br></br><br></br>
                    <ul> <li><FaAnglesRight /> Aposentadoria</li>
                        <li><FaAnglesRight /> Auxilio Doença</li>
                        <li><FaAnglesRight /> Auxilio Acidente</li>
                        <li><FaAnglesRight /> Pensão por Morte</li>
                        <li><FaAnglesRight /> Salário Maternidade</li>
                        <li><FaAnglesRight /> Análise e acerto de CNIS</li>
                        <li><FaAnglesRight /> Planejamento Previdenciário</li>
                        <li><FaAnglesRight /> Revisão/ recurso Administrativo.<br></br><br></br></li>
                        <li><h4><FaAnglesRight /> (TODOS ESSES SERVICOS PREVIDENCIARIO SERÁ PRESTADO SOMENTE NO ENDEREÇO DE CONTAGEM)</h4></li>
                    </ul>
                </div>
                <div id='servicoPrevidenciarioIMG'><img id="servicoPrevidenciarioImg" src={inss}/></div>
            </div>
        </section>
    );
};

export default servicos;