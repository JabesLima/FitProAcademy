import "./HomePage.css";
import BoxeGym from "../../img/Fitness.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function HomePage(){
    return(
        <div className="HomePage">

            <div className="BlocoA">

                <div className="ApresentacaoDaAcademia">
                    <h1>Transforme seu <strong>corpo</strong> com treinos <strong>profissionais</strong></h1>
                    <p>Acesse conteúdo exclusivo de boxe, musculação e programas especializados. Seja diferente dos demais <strong>🥊</strong></p>
                </div>

                {/* <div className="BotaoDeDemonstracao">
                    <button className="b1">Começar agora</button>

                    <button className="b2"><FontAwesomeIcon icon={faPlay} className="PlayIcone"/>Ver Demonstraçâo</button>
                </div> */}

                <div className="RedesSociais">
                    <a href="https://www.instagram.com/jabs_silva_usa_ofc/" target="_blank" rel="noopener noreferrer" className="IS1"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/jabes.lima.9/" target="_blank" rel="noopener noreferrer" className="IS2"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://wa.me/5575992251548?text=Ol%C3%A1!%20Encontrei%20o%20site%20da%20academia%20e%20gostaria%20de%20saber%20mais%20sobre%20planos%20e%20treinos." target="_blank" rel="noopener noreferrer" className="IS3"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
                
            </div>


            <div className="FotoAcademia_Boxe">
                <img src={BoxeGym} alt="B/G"/>
            </div>

        </div>
    );
}; 