import './header.css'
import logo from "../../img/KRO.png"
import { useState } from 'react'

function Header() {

    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <section className="header">
            <a href='#home'><img src={logo} /></a>

            <div className="navButtons">
                <a id='home1' href='#home'>HOME</a>
                <a id='sobreNos1' href='#sobreNos'>SOBRE NÓS</a>
                <a id='contato1' href='#contato'>CONTATO</a>
            </div>
        </section>
    );
}

export default Header;