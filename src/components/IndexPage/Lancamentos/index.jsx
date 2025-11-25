//hooks são funções especiais do react;
// useState ele controla os estados de algo na interface
//antes do return fica a lógica, após o return fica as tags

import "./lancamentos.scss"
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import vermelho from "../../../assets/vermelho.png";
import pink from "../../../assets/pink.png";
import roxo from "../../../assets/roxo.png";
import laranja from "../../../assets/laranja.png";
import batom1 from "../../../assets/batom-vermelho.png"
import batom2 from "../../../assets/batom-roxo.png"
import batom3 from "../../../assets/batom-laranja.png"

function Lancamentos(){

    const [cor, setCor] = useState(vermelho);

    return(
        <section className="lancamentos">
            <h2>APROVEITE OS LANÇAMENTOS</h2>

            <div className="container">
                <div className="col-1">
                    <img src={batom1} alt="" />
                    <img src={batom2} alt="" />
                    <img src={batom3} alt="" />
                </div>

                <div className="col-2">
                    <img src={cor} alt="Modelo usando batom na com azul" />
                </div>

                <div className="col-3">
                    <div className="estrelas"> <StarIcon className="estrela" /> <StarIcon className="estrela" /> <StarIcon className="estrela" /> <StarIcon className="estrela" /> <StarIcon className="estrela" /></div>
                    <h3>Matte Premium</h3>
                    <p className="cores">Cores disponíveis</p>

                    <div className="cores">
                        <button className="btn-pink"  onClick={() => setCor(pink)}></button>
                        <button className="btn-roxo" onClick={() => setCor(roxo)}></button>
                        <button className="btn-laranja" onClick={() => setCor(laranja)}></button>
                        <button className="btn-vermelho" onClick={() => setCor(vermelho)}></button>
                    </div>
                    <p className="titulo-descricao">Descrição</p>
                    <p className="descricao">O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                </div>
            </div>
        </section>
    )
}

export default Lancamentos;