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
        <footer className="footer">
            <div className="footer-container">
                <div className="col-1">
                    <h4>SERVICES</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>My Orders</li>
                        <li>Our Stores</li>
                    </ul>
                </div>

                <div className="col-2">
                    <h4>PAYMENT METHODS</h4>
                    <div className="payments">
                        <img className="mastercard" src={mastercard} alt="" />
                        <img className="visa" src={visa} alt="" />
                        <img className="pix" src={pix} alt="" />
                        <img className="boleto" src={boleto} alt="" />
                    </div>
                </div>

                <div className="col-3">
                    <h4>FOLLOW US</h4>
                    <div className="sociais">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={x} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;