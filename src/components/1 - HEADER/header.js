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
        <img src={logo} alt = "logo da empresa" />
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
            <a href="#home" onClick={() => setMenuAberto(false)}>HOME</a>
            <a href='#servicos' onClick={() => setMenuAberto(false)}>SERVIÇOS</a>
            <a href="#sobreNos" onClick={() => setMenuAberto(false)}>SOBRE NÓS</a>
            <a href="#contato" onClick={() => setMenuAberto(false)}>CONTATO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
