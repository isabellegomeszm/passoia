import { useState } from "react";
import "./footer.scss"
import mastercard from "../../../assets/mastercard.png"
import visa from "../../../assets/visa.png"
import pix from "../../../assets/pix.png"
import boleto from "../../../assets/boleto.png"
import instagram from "../../../assets/socials-1.png"
import facebook from "../../../assets/socials-2.png"
import youtube from "../../../assets/socials-3.png"
import x from "../../../assets/socials-4.png"



function Footer() {
    return(
        <section className="footer">
            <div className="container">
                <div className="col-1">
                    <h4>ATENDIMENTO</h4>
                    <ul>
                        <li>Fale Conosco</li>
                        <li>Perguntas Frequentes</li>
                        <li>Meus Pedidos</li>
                        <li>Nossas Lojas</li>
                    </ul>
                </div>

                <div className="col-2">
                    <h4>FORMAS DE PAGAMENTO</h4>
                    <div className="pagamentos">
                        <img className="mastercard" src={mastercard} alt="" />
                        <img className="visa" src={visa} alt="" />
                        <img className="pix" src={pix} alt="" />
                        <img className="boleto" src={boleto} alt="" />
                    </div>
                </div>

                <div className="col-3">
                    <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
                    <div className="sociais">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={x} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;