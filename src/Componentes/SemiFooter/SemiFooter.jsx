import "./SemiFooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';



export default function SemiFooter(){
    return(
        <div className="SemiFooter">

            <div className="IconeSF"><FontAwesomeIcon icon={faLightbulb} /></div>


            <div className="TextoSF">
                <p>Ninguém vai te salvar. Se você quer, corre atrás e destrói o mundo ao seu redor.</p>
            </div>
        </div>
    );
}