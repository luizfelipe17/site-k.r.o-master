import './home.css'
import logo from "../../img/logoSiteKRO.png"
import imgTelaInicial from "../../img/fundoTelaInicial.jpg"

function home() {
    return (

        <div className='containerHome'>
            <div id="home" className="home">
                <img className="imgTelaInicial" src={imgTelaInicial} />
                <img className="logoTelaInicial" src={logo} />
            </div>
        </div>
    );
};

export default home;