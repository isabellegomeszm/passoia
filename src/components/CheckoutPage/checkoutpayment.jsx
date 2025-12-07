import "./checkoutpayment.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../context/CheckoutContext";
import Swal from "sweetalert2";


function CheckoutPayment() {
  const navigate = useNavigate();
  const { setPayment } = useCheckout();
  const [method, setMethod] = useState(null);

  const handleContinue = () => {
    if (!method) {
      Swal.fire({
        title: "Payment Method",
        text: "Please select a payment method.",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6A4FB6",
      });
      return;
    }

    setPayment(method);
    navigate("/checkout/review");
  };

  return (
    <section className="checkout-page">
      <h3>Payment</h3>

      <div
        className={`payment-option ${method === "card" ? "active" : ""}`}
        onClick={() => setMethod("card")}
      >
        <h4>Credit Card</h4>

        {method === "card" && (
          <div className="card-fields">
            <input className="card" placeholder="Card Number" />
            <input className="card" placeholder="Name on Card" />
            <input className="card" placeholder="Expiration (MM/YY)" />
            <input className="card" placeholder="CVV" />
          </div>
        )}
      </div>

      <div
        className={`payment-option ${method === "boleto" ? "active" : ""}`}
        onClick={() => setMethod("boleto")}
      >
        <h4>Boleto</h4>

        {method === "boleto" && (
          <div className="boleto-info">
            <p>The boleto will be generated after completing your purchase.</p>
          </div>
        )}
      </div>

      <div
        className={`payment-option ${method === "pix" ? "active" : ""}`}
        onClick={() => setMethod("pix")}
      >
        <h4>Pix</h4>

        {method === "pix" && (
          <div className="pix-info">
            <p>The QR Code will be displayed after completing your purchase.</p>
          </div>
        )}
      </div>

      <button className="continue" onClick={handleContinue}>Continue</button>
    </section>
  );
}

export default CheckoutPayment;
