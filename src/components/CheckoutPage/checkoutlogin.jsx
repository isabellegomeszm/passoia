import { useNavigate } from "react-router-dom";
import "./checkoutlogin.scss"

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF} from "react-icons/fa";


function CheckoutLogin() {
  const navigate = useNavigate();

  return (
    <section className="checkout-page">
      <h3>Sign in to complete your order</h3>

      <input className="sign-in" type="email" placeholder="Email" disabled />
      <input className="sign-in" type="password" placeholder="Password" disabled />

      <p className="sign">Sign in with:</p>
      <div className="socials">
        <FcGoogle size={28} className="google"/>
      
        <FaFacebookF size={28} className="facebook" />

      </div>
        
      <button className="continue" onClick={() => navigate("/checkout/data")}>
        Continue
      </button>

      <p className="create-account">
          Don't have an account?
        
        <button className="create-here" onClick={() => navigate("/checkout/create-account")}>
          Create Here
        </button>
      </p>
    </section>
  );
}

export default CheckoutLogin;
