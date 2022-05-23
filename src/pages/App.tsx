import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import EstiloApp from "./App.module.scss";

function App() {
  return (
    <div className={EstiloApp.AppStyle}>
      <Formulario />
      <Cronometro />
      <Lista />
    </div>
  );
}

export default App;
