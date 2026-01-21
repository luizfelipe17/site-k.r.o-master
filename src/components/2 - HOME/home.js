import './home.css'
import { useReveal } from "../../hooks/useReveal";
import logo from "../../img/logoSiteKRO.png"
import imgTelaInicial from "../../img/fundoTelaInicial.jpg"

function Home() {

    useReveal ('.home', {duration: 1500, delay: 200})

    return (
        <section className='containerHome' style={{
            backgroundImage: `url(${imgTelaInicial})`,    
            backgroundColor: "rgba(0,0,0,0.65)", 
            backgroundBlendMode: "multiply",
        }}>
            <div id="home" className="home">
                <img className="logoTelaInicial" src={logo} alt = "logo da empresa"/>
            </div>
        </section>
    );
};

export default Home;