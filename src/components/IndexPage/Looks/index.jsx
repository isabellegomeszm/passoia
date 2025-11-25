import "./looks.scss"
import { useNavigate } from "react-router-dom";
import labios from "../../../assets/card-1.png"
import olhos from "../../../assets/card-2.png"
import rosto from "../../../assets/card-3.png"
import cabelo from "../../../assets/card-4.png"


function Looks() {
    const navigate = useNavigate();

    return (
        <section className="looks">
            <h2>LOOKS E DICAS</h2>

            <div className="looks-conteudo">    
                <div className="labios">
                    <img src={labios} alt="modelo negra passando batom líquido" />
                    <button className="btn-labios" onClick={() => navigate("/looks?categoria=labios")}>LÁBIOS</button>
                </div>
                <div className="olhos">
                    <img src={olhos} alt="modelo branca com sombra dourada nos olhos e sobrancelha evidenciados em close" />
                    <button className="btn-olhos" onClick={() => navigate("/looks?categoria=olhos")}>OLHOS</button>
                </div>
                <div className="rosto">
                    <img src={rosto} alt="modelo branca utilizando um pincel de base no rosto" />
                    <button className="btn-rosto" onClick={() => navigate("/looks?categoria=rosto")}>ROSTO</button>
                </div>
                <div className="cabelo">
                    <img src={cabelo} alt="modelo negra passando batom líquido em sua boca" />
                    <button className="btn-cabelo" onClick={() => navigate("/looks?categoria=tendencias")}>CABELO</button>
                </div>   
            </div>  
     
        </section>

)}

export default Looks; 