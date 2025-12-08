import './header.css'
import logo from "../../img/KRO.png"
import { useState, useRef, useEffect } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickFora(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("click", handleClickFora);

    return () => {
      document.removeEventListener("click", handleClickFora);
    };
  }, []);

  return (
    <section className="header">
      <a href="#home">
        <img src={logo} />
      </a>

      <div
        ref={menuRef}
        className={`navResponsive ${menuAberto ? "active" : ""}`}
      >
        <button
          className="btn-menu"
          onClick={(e) => {
            e.stopPropagation(); 
            setMenuAberto(!menuAberto);
          }}
        >
          <span className="icone"></span>
        </button>

        <div className={`navButtons ${menuAberto ? "show" : ""}`}>
          <div className="menu">
            <a href="#home">HOME</a>
            <a href='#servicos'>SERVIÇOS</a>
            <a href="#sobreNos">SOBRE NÓS</a>
            <a href="#contato">CONTATO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
