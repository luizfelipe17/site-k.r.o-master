import './contato.css'
import {FaRegClock } from "react-icons/fa";
import { FiMapPin} from "react-icons/fi";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'


function Contato() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDrNY7tzQB3-8zmejQpkmoU271kYmmw_zc',
    })

    const position = {
        lat: -19.967231,
        lng: -44.198684,
    }

    return (
        <div id='contato' className='containerContato'>
            <div className='contato'>
                <div>
                    <h1>Contato</h1>
                    <h3><FiMapPin /> Unidade Betim</h3>
                    <p>Rua Inconfidência, 510 - Centro, Betim<br></br>
                        MG, 32600-100</p>

                    <h3><FiMapPin /> Unidade Contagem - "Somente Serviços Previdenciários"</h3>
                    <p>Rua Moassy, 48 - Novo Eldorado, Contagem<br></br>
                        MG, 32341-170</p>
                </div>
                <div className='informacoes'>
                    <div className='horarioAtendimento'>
                        <h3>Horário de Atendimento</h3>
                        <scam>Seg. à Qui.:<br></br>
                            <FaRegClock /> 08h30 às 12h00
                            <br></br>
                            <FaRegClock /> 14h00 às 18h00</scam><br></br><br></br>
                        <scam>Sex.:<br></br>
                            <FaRegClock /> 08h30 às 12h00
                            <br></br>
                            <FaRegClock /> 14h00 às 17h00</scam>
                    </div>
                    <div className='boxinformacoes'>
                        <h3>Informações</h3>

                        <a href='mailto:oscarcontabilidade@gmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1,++Estou+entrando+em+contato+atrav%C3%A9s+do+site+da+K.R.O.+Consultoria+para+tirar+algumas+d%C3%BAvidas+sobre+os+servi%C3%A7os+oferecidos.++Fico+no+aguardo+do+retorno.+Obrigado!' target='_blank'>Email: oscarcontabilidade@gmail.com</a>
                        <a href='https://wa.me/+5531988997860' target='_blank'>Whatsapp: +55 (31) 98899-7860</a>
                        <a>Telefone: (31) 3594-1294</a>

                    </div>
                </div>
            </div>

            <div className='map'>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={position}
                        zoom={15}
                    >
                        <Marker position={position} />
                    </GoogleMap>
                ) : (
                    <></>
                )}
            </div >
        </div>
    );
};

export default Contato;