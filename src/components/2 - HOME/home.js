import './home.css'
import logo from "../../img/logoSiteKRO.png"
import imgTelaInicial from "../../img/fundoTelaInicial.jpg"

function home() {
    return (

        <section className='containerHome' style={{
            backgroundImage: `url(${imgTelaInicial})`,    
            backgroundColor: "rgba(0,0,0,0.65)", 
            backgroundBlendMode: "multiply",
        }}>
            <div id="home" className="home">
                <img className="logoTelaInicial" src={logo} />
            </div>
        </section>
    );
};

export default home;