import './contato.css'
import { FaRegClock } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useReveal } from "../../hooks/useReveal";

function Contato() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_KEY_GOOGLE,
    })

    const position = {
        lat: -19.967231,
        lng: -44.198684,
    }

    useReveal('.contato', { duration: 1500, distance: "10px", origin: 'left' })
    useReveal('.map', { duration: 1500, distance: "10px", origin: "right" })

    return (
        <section id='contato' className='containerContato'>
            <div className='contato'>
                <div>
                    <h1>Contato</h1>
                    <h3><FiMapPin /> Unidade Betim</h3>
                    <p>Rua Inconfidência, 510 - Sala 202 - Centro, Betim<br></br>
                        MG, 32600-100</p>

                    <h3><FiMapPin /> Unidade Contagem - "Somente Serviços Previdenciários"</h3>
                    <p>Rua Moassy, 48 - Novo Eldorado, Contagem<br></br>
                        MG, 32341-170</p>
                </div>
                <div className='informacoes'>
                    <div className='boxinformacoes'>
                        <h3>Informações</h3>

                        <a>Telefone: (31) 3594-1294</a>
                        <p id='whatsapp-p'>Email:</p>
                        <a id="espacamentoContato" href='mailto:oscarcontabilidade@hotmail.com?subject=Contato via Site %E2%80%93 K.R.O. Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank'>Oscarcontabilidade@hotmail.com (Betim)</a>
                        <a id="espacamentoContato" href='mailto:oscarcontabilidade2009@gmail.com?subject=Contato via Site %E2%80%93 K.R.O. Consultoria&body=Ol%C3%A1, Estou entrando em contato atrav%C3%A9s do site da K.R.O. Consultoria para tirar algumas d%C3%BAvidas sobre os servi%C3%A7os oferecidos. Fico no aguardo do retorno. Obrigado!' target='_blank'>Oscarcontabilidade2009@gmail.com (Contagem)</a>
                        <p id='whatsapp-p'>Whatsapp:</p>
                        <a id='espacamentoContato' href='https://wa.me/+5531988997860?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank'>+55 (31) 98899-7860 (Betim)</a>
                        <a id='espacamentoContato' href='https://wa.me/+5531988998144?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank'>+55 (31) 98899-8144 (Contagem)</a>

                    </div>
                    <div className='horarioAtendimento'>
                        <h3>Horário de Atendimento</h3>
                        <div className='horarios'>
                            <div className='horarioSegASex'>
                                <p>Seg. à Qui.:<br></br>
                                    <FaRegClock /> 08h30 às 12h00
                                    <br></br>
                                    <FaRegClock /> 14h00 às 18h00</p>
                            </div>
                            <div className='horarioSexta'>
                                <p>Sex.:<br></br>
                                    <FaRegClock /> 08h30 às 12h00
                                    <br></br>
                                    <FaRegClock /> 14h00 às 17h00</p>
                            </div>
                        </div>
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
        </section>
    );
};

export default Contato;