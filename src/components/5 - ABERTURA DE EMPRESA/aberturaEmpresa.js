import './aberturaEmpresa.css'
import { FaIdCard, FaAddressCard, FaHome, FaHeart, FaFileInvoice, FaFileAlt } from "react-icons/fa";
import { PiIdentificationCardThin, PiIdentificationBadgeThin, PiFilesThin, PiFileTextThin, PiHandHeartThin, PiHouseLineThin       } from "react-icons/pi";

import imgAberturaEmpresa from "../../img/imgAberturaEmpresa.jpg"

function AberturaEmpresa() {

    return (
        <div className='aberturaEmpresas'>
            <h1>Abertura de empresa <br></br>Documentação necessária</h1>
            <div className='containerAberturaEmpresa'>
                <img src={imgAberturaEmpresa} alt="Documentos Abertura de Empresa" />
                <div className='boxAberturaEmpresas'>
                    <div className='primeiraLinha'>
                        <div className="boxAberturaEmpresaItens">
                            <PiIdentificationBadgeThin size={50} />
                            <h3>RG</h3>
                        </div>
                        <div className="boxAberturaEmpresaItens">
                            <PiHouseLineThin size={50} />
                            <h3>Comprovante de Endereço</h3>
                        </div>
                        <div className="boxAberturaEmpresaItens">
                            <PiIdentificationCardThin size={55} />
                            <h3>CPF</h3>
                        </div>
                    </div>
                    <div className='segundaLinha'>
                        <div className="boxAberturaEmpresaItens">
                            <PiHandHeartThin  size={60} />
                            <h3>Certidão de Casamento (Se casado)</h3>
                        </div>
                        <div className="boxAberturaEmpresaItens">
                            <PiFileTextThin size={65} />
                            <h3>Cópia do IPTU ou Inscrição Municipal</h3>
                        </div>
                        <div className="boxAberturaEmpresaItens">
                            <PiFilesThin  size={70} />
                            <h3>Documentos Adicionais (Se necessário)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AberturaEmpresa;