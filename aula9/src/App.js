import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Menu from './componentes/Menu/Menu'
import About from './componentes/About/About'
import Footer from './componentes/footer/Footer';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Menu></Menu>
      <Banner/>
      <About></About>
      <Formulario/>
      <Footer></Footer>
    </div>
  );
}

export default App;
