import "./App.css";
import Header from "./Componentes/Header/Header";
import HomePage from "./Componentes/HomePage/HomePage";
import ClientConvence from "./Componentes/ClientConvence/ClientConvence";
import Plano from "./Componentes/Plano/Plano";
import SemiFooter from "./Componentes/SemiFooter/SemiFooter";
import Footer from "./Componentes/footer/Footer";


export default function App() {

  return (
    <div className="Layote">
     <Header/>
     <HomePage/>
     <ClientConvence/>
     <Plano/>
     <SemiFooter/>
      <Footer/>
    </div>
  )
}


