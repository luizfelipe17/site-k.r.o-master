import './header.css'
import logo from "../../img/KRO.png"

function Header() {
    return (
        <div className="head">
            <a href='#home'><img src={logo} /></a>

            <div className="navButtons">
                <a id='home1' href='#home'>HOME</a>
                <a id='sobreNos1' href='#sobreNos'>SOBRE NÓS</a>
                <a id='contato1' href='#contato'>CONTATO</a>
            </div>
        </div>
    );
}

export default Header;