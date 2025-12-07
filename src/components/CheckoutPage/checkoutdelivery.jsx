import "./checkoutdelivery.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../context/CheckoutContext";
import Swal from "sweetalert2";



function CheckoutDelivery() {
  const navigate = useNavigate();
  const { setDelivery } = useCheckout();
  const [selected, setSelected] = useState(null);

  const shipping = {
    standard: {
      name: "Standard Shipping (PAC)",
      deliveryTime: "4 to 8 business days",
      price: 19.9,
    },
    express: {
      name: "Express Shipping (SEDEX)",
      deliveryTime: "1 to 2 business days",
      price: 34.9,
    },
  };

  const handleContinue = () => {
    if (!selected) {
      Swal.fire({
        title: "Shipping Method",
        text: "Please select a shipping method.",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6A4FB6",
      });
      return;
    }

    setDelivery(shipping[selected]);
    navigate("/checkout/payment");
  };

  return (
    <section className="checkout-page">
      <h3>Shipping Method</h3>

      <div
        className={`delivery-option ${selected === "standard" ? "active" : ""}`}
        onClick={() => setSelected("standard")}
      >
        <h4>{shipping.standard.name}</h4>
        <p>{shipping.standard.deliveryTime}</p>
        <strong>${shipping.standard.price.toFixed(2)}</strong>
      </div>

      <div
        className={`delivery-option ${selected === "express" ? "active" : ""}`}
        onClick={() => setSelected("express")}
      >
        <h4>{shipping.express.name}</h4>
        <p>{shipping.express.deliveryTime}</p>
        <strong>${shipping.express.price.toFixed(2)}</strong>
      </div>

      <button onClick={handleContinue}> Continue </button>
    </section>
  );
}

export default CheckoutDelivery;
