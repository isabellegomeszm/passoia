import "./bag.scss";
import { useBag } from "../../context/BagContext";

function BagPage() {
  const { bag, increaseQuantity, decreaseQuantity, removeFromBag, totalPrice } =
    useBag() || {};

  if (!bag) {
    return (
      <section className="bag-page">
        <h2>Your Bag</h2>
        <p className="empty">Bag context not found. Make sure BagProvider wraps the app.</p>
      </section>
    );
  }

  return (
    <section className="bag-page">
      <h2>Your Bag</h2>

      {bag.length === 0 && <p className="empty">Your bag is empty.</p>}

      {bag.map((item, index) => (
        <div key={index} className="bag-item">
          <img src={item.image} alt={item.name} className="bag-img" />

          <div className="info">
            <h4>{item.name}</h4>
            {item.variation && <p className="variation">Color: {item.variation}</p>}
            <p className="price">R$ {item.price.toFixed(2)}</p>

            <div className="quantity">
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item)}>+</button>
            </div>
          </div>

          <button className="remove" onClick={() => removeFromBag(item)}>
            Remove
          </button>
        </div>
      ))}

      {bag.length > 0 && (
        <div className="total">
          <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </section>
  );
}

export default BagPage;
