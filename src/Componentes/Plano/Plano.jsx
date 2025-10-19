import "./Plano.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Plano(){
    return(
        <div className="Plano">

            <div className="TituloP">
                <h1>Escolha seu <strong>plano ideal</strong></h1>
                <p>Planos flexíveis para todos os níveis, com treinos personalizados e acompanhamento próximo.</p>
            </div>

            <div className="BlocosP">

                <div className="p1">
                    <div className="tituloP">
                        <h1>Boxe</h1>
                        <p>Programa especializado para todos—homens, mulheres, iniciantes ou atletas de alto nível.</p>
                    </div>

                    <div className="PrecoP">
                        <h1>R$40</h1>
                        <p>/</p>
                        <p>mês</p>
                    </div>
                    
                    <div className="ListaPlano">
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} />Treinos de boxe personalizados</li>
                            <li><FontAwesomeIcon icon={faCheck} />Foco em força, resistência e técnica</li>
                            <li><FontAwesomeIcon icon={faCheck} />Ideal para quem quer emagrecer com saúde</li>
                            <li><FontAwesomeIcon icon={faCheck} />Perfeito para melhorar seu condicionamento físico</li>
                            <li><FontAwesomeIcon icon={faCheck} />Aumenta disposição e energia no dia a dia</li>
                        </ul>
                    </div>


                    <div className="butoes">
                        <button>
                            <a href="https://wa.me/5575992251548?text=Ol%C3%A1,%20vi%20o%20plano%20de%20boxe%20e%20fiquei%20interessado.%20Quando%20podemos%20come%C3%A7ar?" 
                            target="_blank" rel="noopener noreferrer">
                            Entrar em contato
                            </a>


                        </button>
                    </div>
                </div>

                <div className="p2">
                    <div className="tituloP">
                        <h1>Musculação</h1>
                        <p>Programa especializado para homens e mulheres</p>
                    </div>

                    <div className="PrecoP">
                        <h1>R$30</h1>
                        <p>/</p>
                        <p>mês</p>
                    </div>
                    
                    <div className="ListaPlano">
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} />Treinos personalizados</li>
                            <li><FontAwesomeIcon icon={faCheck} />Foco nos seus objetivos de corpo</li>
                            <li><FontAwesomeIcon icon={faCheck} />Exercícios enviados online</li>
                            <li><FontAwesomeIcon icon={faCheck} />Respostas rápidas via WhatsApp</li>
                            <li><FontAwesomeIcon icon={faCheck} />Acompanhamento mensal de evolução</li>
                        </ul>
                    </div>

                    <div className="butoes">
                        <button> 
                            <a href="https://wa.me/5575992251548?text=Ol%C3%A1,%20vi%20o%20plano%20de%20muscula%C3%A7%C3%A3o%20e%20fiquei%20interessado.%20Quando%20podemos%20come%C3%A7ar?" 
                            target="_blank" rel="noopener noreferrer">
                            Entrar em contato
                            </a>

                        </button>
                    </div>
                </div>

                <div className="p3">
                    <div className="tituloP">
                        <h1>Dieta</h1>
                        <p>Pra homem e mulher</p>
                    </div>

                    <div className="PrecoP">
                        <h1>R$40</h1>
                        <p>/</p>
                        <p>mês</p>
                    </div>
                    
                    <div className="ListaPlano">
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} />Dieta personalizada</li>
                            <li><FontAwesomeIcon icon={faCheck} />Foco nos seus objetivos físicos</li>
                            <li><FontAwesomeIcon icon={faCheck} />Orientação nutricional simples e prática</li>
                            <li><FontAwesomeIcon icon={faCheck} />Respostas rápidas via WhatsApp</li>
                            <li><FontAwesomeIcon icon={faCheck} />Acompanhamento mensal de evolução</li>
                        </ul>
                    </div>

                    <div className="butoes">
                        <button> 
                            <a href="https://wa.me/5575992251548?text=Ol%C3%A1,%20vi%20o%20plano%20de%20nutri%C3%A7%C3%A3o%20e%20fiquei%20interessado(a).%20Quando%20podemos%20come%C3%A7ar?" 
                        target="_blank" rel="noopener noreferrer">
                        Entrar em contato
                        </a>

                        </button>
                    </div>
                </div>

                {/* <div className="p4">
                    <div className="tituloP">
                        <h1>Musculação Feminina</h1>
                        <p>Programa especializado para o público feminino</p>
                    </div>

                    <div className="PrecoP">
                        <h1>R$40</h1>
                        <p>/</p>
                        <p>mês</p>
                    </div>
                    
                    <div className="ListaPlano">
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} />Treinos personalizados</li>
                            <li><FontAwesomeIcon icon={faCheck} />Foco em força e definição</li>
                            <li><FontAwesomeIcon icon={faCheck} />Orientação nutricional básica</li>
                            <li><FontAwesomeIcon icon={faCheck} />Comunidade exclusiva</li>
                            <li><FontAwesomeIcon icon={faCheck} />Acompanhamento mensal</li>
                        </ul>
                    </div>
                </div> */}


            </div>

        </div>
    );
}