import { useNavigate } from "react-router-dom";
import "./checkoutdata.scss"

function CheckoutData() {
  const navigate = useNavigate();

  return (
    <section className="checkout-page">
      <h3>Personal Data</h3>

    <div className="personal">
      <input className="personal" placeholder="Name" readOnly />
      <input className="personal" placeholder="Last Name" readOnly />
    </div>
      
    <div className="location">
      <input className="personal" placeholder="Address" readOnly />
      <input className="personal" placeholder="Address Line 2 (optional)" readOnly />

    </div>

    <div className="location-2">
      <input className="location-2" placeholder="State / Province" readOnly />
      <input className="location-2" placeholder="City" readOnly />
    </div>

    <div className="location-3">
      <input className="location-3" placeholder="ZIP Code" readOnly />
      <input className="location-3" placeholder="Country" readOnly />
    </div>
      
      <button className="continue" onClick={() => navigate("/checkout/delivery")}>
        Continue
      </button>
    </section>
  );
}

export default CheckoutData;
