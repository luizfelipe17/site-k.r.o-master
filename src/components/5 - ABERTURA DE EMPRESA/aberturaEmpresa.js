import './aberturaEmpresa.css'
import { PiIdentificationCardThin, PiIdentificationBadgeThin, PiFilesThin, PiFileTextThin, PiHandHeartThin, PiHouseLineThin       } from "react-icons/pi";
import { useReveal } from "../../hooks/useReveal";
import imgAberturaEmpresa from "../../img/imgAberturaEmpresa.jpg"

function AberturaEmpresa() {

    // useReveal('#box-efeitos-1', { duration: 1500, distance: "10px", origin: "bottom", reset: false})
    // useReveal('#box-efeitos-2', { duration: 2000, delay: 200, distance: "10px", origin: "bottom", reset: false})
    // useReveal('#box-efeitos-3', { duration: 2000, delay: 400, distance: "10px", origin: "bottom", reset: false })
    // useReveal('#box-efeitos-4', { duration: 2000, delay: 600, distance: "10px", origin: "bottom", reset: false })
    // useReveal('#box-efeitos-5', { duration: 2000, delay: 800, distance: "10px", origin: "bottom", reset: false})
    // useReveal('#box-efeitos-6', { duration: 2000, delay: 900, distance: "10px", origin: "bottom", reset: false })
    // useReveal('#box-efeitos-7', { duration: 2000, delay: 1100, distance: "10px", origin: "bottom", reset: false })

    return (
        <section id = 'documentos' className='aberturaEmpresas'>
            <h1>Abertura de empresa <br></br>Documentação necessária</h1>
            <div className='containerAberturaEmpresa'>
                <img id = "box-efeitos-1" src={imgAberturaEmpresa} alt="Documentos Abertura de Empresa" />
                <div className='boxAberturaEmpresas'>
                    <div className='primeiraLinha'>
                        <div id = "box-efeitos-2" className="boxAberturaEmpresaItens">
                            <PiIdentificationBadgeThin size={50} />
                            <h3>RG</h3>
                        </div>
                        <div id = "box-efeitos-3" className="boxAberturaEmpresaItens">
                            <PiHouseLineThin size={50} />
                            <h3>Comprovante de Endereço</h3>
                        </div>
                        <div id = "box-efeitos-4" className="boxAberturaEmpresaItens">
                            <PiIdentificationCardThin size={55} />
                            <h3>CPF</h3>
                        </div>
                    </div>
                    <div className='segundaLinha'>
                        <div id = "box-efeitos-5" className="boxAberturaEmpresaItens">
                            <PiHandHeartThin  size={65} />
                            <h3>Certidão de Casamento (Se casado)</h3>
                        </div>
                        <div id = "box-efeitos-6" className="boxAberturaEmpresaItens">
                            <PiFileTextThin size={65} />
                            <h3>Cópia do IPTU ou Inscrição Municipal</h3>
                        </div>
                        <div id = "box-efeitos-7" className="boxAberturaEmpresaItens">
                            <PiFilesThin  size={70} />
                            <h3>Documentos Adicionais (Se necessário)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AberturaEmpresa;