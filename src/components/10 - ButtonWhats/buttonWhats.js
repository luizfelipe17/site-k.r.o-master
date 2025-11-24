import './buttonWhats.css'
import { FaWhatsapp } from "react-icons/fa";

function buttonWhats() {
    return (
        <div className='buttonWhatsFixo'>
            <a href='https://wa.me/+5531988997860?text=Olá! Gostaria de informações sobre os serviços de contabilidade. Pode me ajudar?' target='_blank'><FaWhatsapp /></a>
        </div>

    );
};
export default buttonWhats;