import Header from "./components/1 - HEADER/header"
import Home from "./components/2 - HOME/home"
import Objetivos from "./components/3 - OBJETIVOS/objetivos"
import Servicos from "./components/4 - SERVIÇOS/servicos"
import AberturaEmpresa from "./components/5 - ABERTURA DE EMPRESA/aberturaEmpresa"
import Especialidades from "./components/6 - ESPECIALIDADES/especialidades"
import Contato from "./components/7 - CONTATO/contato"
import SobreNos from "./components/8 - SOBRE NOS/sobreNos"
import Footer from "./components/9 - FOOTER/footer"
import ButtonWhats from './components/10 - ButtonWhats/buttonWhats';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Objetivos />
      <Servicos />
      <AberturaEmpresa />
      <Especialidades />
      <Contato />
      <SobreNos />
      <Footer />
      <ButtonWhats />
    </div>
  );
}

export default App;
