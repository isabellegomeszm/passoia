import { useNavigate } from "react-router-dom";
import "./checkoutlogin.scss"

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


function CheckoutCreateAccount() {
  const navigate = useNavigate();

  return (
    <section className="checkout-page">
      <h3>Sign up</h3>

      <input className="sign-in" placeholder="Name" readOnly />
      <input className="sign-in" placeholder="Last Name" readOnly />
      <input className="sign-in" placeholder="Email" readOnly />
      <input className="sign-in" placeholder="Create Password" readOnly />

      <p className="sign">Sign up with:</p>
      <div className="socials">
        <FcGoogle size={28} className="google"/>
      
        <FaFacebookF size={28} className="facebook" />

      </div>

      <button className="continue" onClick={() => navigate("/checkout/data")}>
        Criate Account
      </button>
    </section>
  );
}

export default CheckoutCreateAccount;
