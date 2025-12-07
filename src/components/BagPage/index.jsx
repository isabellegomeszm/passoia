import "./bag.scss";
import { useBag } from "../../context/BagContext";
import { useNavigate } from "react-router-dom";

function BagPage() {
  const navigate = useNavigate();
  const { bag, increaseQuantity, decreaseQuantity, removeFromBag, totalPrice } =
    useBag() || {};

  if (!bag) {
    return (
      <section className="bag-page">
        <h2>Your Bag</h2>
        <p className="empty">
          Bag context not found. Make sure BagProvider wraps the app.
        </p>
      </section>
    );
  }

  return (
    <section className="bag-page">
      <h3>Your Bag</h3>

      {bag.length === 0 && <p className="empty">Your bag is empty.</p>}

      {bag.map((item, index) => (
        <div key={index} className="bag-item">
          <div className="info-img">
            <img src={item.image} alt={item.name} className="bag-img" />

            <div className="info">
              <h5>{item.name}</h5>
              {item.variation && (
                <p className="variation">Color: {item.variation}</p>
              )}
              <p className="price">R$ {item.price.toFixed(2)}</p>

              <div className="quantity">
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>
            </div>
          </div>

          <button className="remove" onClick={() => removeFromBag(item)}>
            Remove
          </button>
        </div>
      ))}

      {bag.length > 0 && (
        <div className="checkout-area">
          <h4>Total: R$ {totalPrice.toFixed(2)}</h4>

          <div className="checkout-btns">
            <button
              className="checkout"
              onClick={() => navigate("/checkout/login")}
            >
              Continue
            </button>

            <button
              className="add-products"
              onClick={() => navigate("/products")}
            >
              Add more products
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default BagPage;
