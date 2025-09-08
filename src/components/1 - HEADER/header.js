import './header.css'
import logo from "../../img/logoSiteKRO.png"

function header() {
    return (
        <div className="head">
            <img src={logo} />

            <div className="navButtons">
                <a id='home1' href='#home'>HOME</a>
                <a id='sobreNos1' href='#sobreNos'>SOBRE NÓS</a>
                <a id='contato1' href='#contato'>CONTATO</a>
            </div>
        </div>
    );
}

export default header;