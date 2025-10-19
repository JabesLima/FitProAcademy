import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Heaader() {

  return (
    <div className="Header">

    <div className="NomeAcademia">
        <h1>FitPro Academy</h1>
    </div>


    {/* <div className="CentroDivs">


        <div className="Planos">
            <a href="#">Planos</a>
        </div>
        <div className="Sobre">
            <a href="#">Sobre</a>
        </div>
        <div className="Contato">
            <a href="#">Contato</a>  
        </div>


    </div> */}




    <div className="IconeZapHeader">
        <a href="https://wa.me/5575992251548?text=Ol%C3%A1!%20Encontrei%20o%20site%20da%20academia%20e%20gostaria%20de%20saber%20mais%20sobre%20planos%20e%20treinos."
        target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
    </div>



    </div>
  )
}

