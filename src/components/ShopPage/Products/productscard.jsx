import { useState } from "react";
import "./productscard.scss";
import { StarIcon } from "@heroicons/react/24/solid";

function ProductCard({ product, addToCart }) {
  const {
    name,
    price,
    type,
    image,
    defaultImage,
    variations = [],
    rating,
  } = product;

  const [selectedVariation, setSelectedVariation] = useState(
    type === "variable" ? variations[0] : null
  );

  const displayedImage =
    type === "variable"
      ? selectedVariation?.image || defaultImage
      : image || defaultImage;

  const handleAdd = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: displayedImage,
      variation: selectedVariation ? selectedVariation.colorName : null,
    };

    addToCart(itemToAdd);
  };

  return (
    <div className="product-card">
      <img className="product-img" src={displayedImage} alt={name} />

      <h3>{name}</h3>

      <div className="rating">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
          <StarIcon key={i} className="star" />
        ))}
      </div>

      <p className="price">R$ {price.toFixed(2)}</p>

      {type === "variable" && (
        <div className="variations">
          <p className="variation-title">Available shades</p>

          <div className="variation-options">
            {variations.map((v) => (
              <button
                key={v.id}
                className={`variation-btn ${
                  selectedVariation?.id === v.id ? "active" : ""
                }`}
                onClick={() => setSelectedVariation(v)}
              >
                <img src={v.image} alt={v.colorName} />
              </button>
            ))}
          </div>

          <p className="selected-name">{selectedVariation?.colorName}</p>
        </div>
      )}

      <button className="add-btn" onClick={handleAdd}>
        Add to Bag
      </button>
    </div>
  );
}

export default ProductCard;
