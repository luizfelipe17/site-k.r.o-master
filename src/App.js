import Header from "./components/1 - HEADER/header.js"
import Home from "./components/2 - HOME/home.js"
import Objetivos from "./components/3 - OBJETIVOS/objetivos.js"
import Servicos from "./components/4 - SERVIÇOS/servicos.js"
import AberturaEmpresa from "./components/5 - ABERTURA DE EMPRESA/aberturaEmpresa.js"
import Contato from "./components/6 - CONTATO/contato.js"
import SobreNos from "./components/7 - SOBRE NOS/sobreNos.js"
import Footer from "./components/8 - FOOTER/footer.js"
import ButtonWhats from './components/9 - ButtonWhats/buttonWhats.js';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Objetivos />
      <Servicos />
      <AberturaEmpresa />
      <Contato />
      <SobreNos />
      <Footer />
      <ButtonWhats />
    </div>
  );
}

export default App;
