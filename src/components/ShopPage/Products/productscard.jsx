import { useEffect, useState } from "react";
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

  const [selectedColor, setSelectedColor] = useState(
    type === "variable" && variations.length > 0 ? variations[0] : null
  );

  const displayedImage = 
    type === "variable"
    ? selectedColor?.image
    : image || defaultImage;

  const handleAdd = () => {
    addToCart({
      name,
      price,
      image: displayedImage,
      variation: selectedColor?.colorName || null,
      quantity: 1,
    });
  };

  return (
    <div className="product-card">
      <img className="product-img" src={displayedImage} alt={name} />

      <h4>{name}</h4>

      <div className="rating">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
          <StarIcon key={i} className="star" />
        ))}
      </div>

      <p className="price">R$ {price.toFixed(2)}</p>

      {type === "variable" && (
        <div className="variations">
          <p className="variation-title">Available colors</p>

          <div className="color-buttons">
            {variations.map((v) => (
              <button
                key={v.id}
                className={`color-btn ${selectedColor?.id ===v.id ? "active" : ""}`}
                style={{ backgroundColor: v.colorHex }}
                onClick={() => setSelectedColor(v)}
              />
            ))}
          </div>
          
          <p className="selected-name">{selectedColor?.colorName}</p>
        </div>
      )}

      <button className="add-btn" onClick={handleAdd}>Add to Bag</button>
    </div>
  );
}

export default ProductCard;
