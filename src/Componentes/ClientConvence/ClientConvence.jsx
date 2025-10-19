import "./ClientConvence.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDumbbell, 
  faBullseye, 
  faUsers, 
  faTrophy, 
  faClock, 
  faShield 
} from "@fortawesome/free-solid-svg-icons";

export default function ClientConvence(){
    return(
        <div className="ClientConvence">
            <div className="TitulosConvincentes">
                <h1>Por que escolher a <strong>FitPro Academy</strong>?</h1>
                <p>Oferecemos muito mais que treinos. É uma experiência completa de transformação física e mental.</p>
            </div>

            <div className="blocosConvincentes">

                <div className="d1">
                    <div className="Icon"><FontAwesomeIcon icon={faDumbbell}/> </div>
                    <div className="tituloBloco"><h1>Treinos Personalizados</h1></div>
                    <div className="TextoBloco"><p>Cada treino é planejado para o seu corpo e seus objetivos, usando técnicas simples e eficazes.</p></div>
                </div>

                <div className="d2">
                    <div className="Icon"><FontAwesomeIcon icon={faBullseye} /></div>
                    <div className="tituloBloco"><h1>Resultados Sob Medida</h1></div>
                    <div className="TextoBloco"><p>O foco é você. Cada treino é ajustado para o seu ritmo e evolução, garantindo progresso real.</p></div>
                </div>

                <div className="d3">
                    <div className="Icon"><FontAwesomeIcon icon={faUsers} /></div>
                    <div className="tituloBloco"><h1>Acompanhamento Direto</h1></div>
                    <div className="TextoBloco"><p>Treine com orientação próxima e atenção total em cada movimento, sempre com foco em segurança e performance.</p></div>
                </div>

                <div className="d4">
                    <div className="Icon"><FontAwesomeIcon icon={faTrophy} /></div>
                    <div className="tituloBloco"><h1>Transformações Reais</h1></div>
                    <div className="TextoBloco"><p>Através de disciplina, técnica e constância, cada aluno alcança resultados que mudam corpo e mente.</p></div>
                </div>

                <div className="d5">
                    <div className="Icon"><FontAwesomeIcon icon={faClock} /></div>
                    <div className="tituloBloco"><h1>Horários Flexíveis</h1></div>
                    <div className="TextoBloco"><p>Aulas disponíveis das 14h às 20h, com liberdade para escolher o melhor horário pra você.</p></div>
                </div>

                <div className="d6">
                    <div className="Icon"><FontAwesomeIcon icon={faShield} /></div>
                    <div className="tituloBloco"><h1>Treinos Seguros e Eficientes</h1></div>
                    <div className="TextoBloco"><p>Cada exercício é feito com supervisão e correção constante, garantindo segurança e evolução sólida.</p></div>
                </div>

            </div>
        </div>
    );
}