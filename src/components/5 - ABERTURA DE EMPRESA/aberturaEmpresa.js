import './aberturaEmpresa.css'
import { FaIdCard, FaAddressCard, FaHome, FaHeart, FaFileInvoice, FaUsers, FaFileAlt } from "react-icons/fa";


function aberturaEmpresa() {
    return (
        <div className='aberturaEmpresas'>
            <div>
                <h3>Abertura de empresa: documentos necessários</h3>
                <div className='boxAberturaEmpresas'>
                    <div id="boxAberturaEmpresaItens">
                        <FaIdCard size={70} />
                        <p>RG</p>
                    </div>
                    <div id="boxAberturaEmpresaItens">
                        <FaAddressCard size={70} />
                        <p>CPF</p>
                    </div>
                    <div id="boxAberturaEmpresaItens">
                        <FaHome size={70} />
                        <p>Comprovante de Endereço</p>
                    </div>
                    <div id="boxAberturaEmpresaItens">
                        <FaHeart size={70} />
                        <p>Certidão de Casamento<br />(se casado)</p>
                    </div>
                    <div id="boxAberturaEmpresaItens">
                        <FaFileInvoice size={70} />
                        <p>Cópia do IPTU ou<br />Inscrição Municipal</p>
                    </div>
                    <div id="boxAberturaEmpresaItens">
                        <FaFileAlt size={70} />
                        <p>Documentos Adicionais<br />(se necessário)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aberturaEmpresa;