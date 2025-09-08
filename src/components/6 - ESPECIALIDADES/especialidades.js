import './especialidades.css'
import baixoImposto from "../../img/BaixoImposto.jpg"
import estruturaContabil from "../../img/EstruturaContabil.jpg"
import parceriaEmpresarial from "../../img/ParceriaEmpresarial.jpg"
import especialidadesFinanceiro from "../../img/EspecialidadesFinanceiro.jpg"

function especialidades() {
    return (
        <div className='containerEspecialidades'>

            <div className='tituloEspecialidas'><h1>Especialidades</h1></div>

            <div className="containerCards">
                <div className='boxEspecialidades' style={{
            backgroundImage: `url(${especialidadesFinanceiro})`}}>
                    {/* <img id='imgEspecialidades' src={especialidadesFinanceiro}></img> */}
                    <div className='textoHouver'>Execução impecável e sem erros das operações Financeiras da sua Empresa.</div>
                </div>
                <div className='boxEspecialidades'>
                    <img id='imgEspecialidades' src={parceriaEmpresarial}></img>
                    <div className='textoHouver'>Soluções completas parcerias de confiança em sua vida empresarial.</div>
                </div>
                <div className='boxEspecialidades'>
                    <img id='imgEspecialidades' src={baixoImposto}></img>
                    <div className='textoHouver'>Mantemos a sua empresa regularizada e pagando o mínimo de impostos realmente devidos e que a empresa esteja sempre em dia com suas obrigações.  </div>
                </div>
                <div className='boxEspecialidades'>
                    <img id='imgEspecialidades' src={estruturaContabil}></img>
                    <div className='textoHouver'>Nosso time de contadores ajudará você a escolher o regime tributário e toda organização da estrutura contábil da sua empresa.</div>
                </div>
            </div>


        </div>
    );
};

export default especialidades;