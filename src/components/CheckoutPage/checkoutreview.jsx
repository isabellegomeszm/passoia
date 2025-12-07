import { useCheckout } from "../../context/CheckoutContext";
import { useBag } from "../../context/BagContext";
import "./checkoutreview.scss";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function CheckoutReview() {
  const navigate = useNavigate();
  const { delivery, payment } = useCheckout();
  const { bag, totalPrice, setBag } = useBag();   // <- Aqui está o nome certo

  const finalTotal = delivery ? totalPrice + delivery.price : totalPrice;

  const address = {
    name: "John Doe",
    street: "123 Main Street",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
  };


  const confirmOrder = async() => {
    await Swal.fire({
      title: "Order Placed!",
      text: "Your order was completed successfully.",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "#6A4FB6",
    });

    setBag([]);

    navigate("/");
  };


  return (
    <section className="checkout-page">
      <h3>Review Your Order</h3>

      <div className="review-box">
        <h4>Shipping Address</h4>
        <p>{address.name}</p>
        <p>{address.street}</p>
        <p>{address.city}, {address.state} {address.zip}</p>
      </div>

      {bag.length > 0 && (
        <div className="review-box">
          <h4>Your Items</h4>

          {bag.map((item, index) => (
            <div key={index} className="item-row">
              <span>
                {item.name} 
                {item.variation ? ` - ${item.variation}` : ""} 
                (x{item.quantity})
              </span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
        </div>
      )}

      {delivery && (
        <div className="review-box">
          <h4>Delivery Method</h4>
          <p>{delivery.name}</p>
          <p>{delivery.deliveryTime}</p>
          <strong>${delivery.price.toFixed(2)}</strong>
        </div>
      )}

      {payment && (
        <div className="review-box">
          <h4>Payment Method</h4>
          <p>{payment}</p>
        </div>
      )}

      <div className="review-box-total">
        <h4>Order Total</h4>
        <strong>${finalTotal.toFixed(2)}</strong>
      </div>

      <button className="continue" onClick={confirmOrder}>
        Confirm Order
      </button>
    </section>
  );
}

export default CheckoutReview;
