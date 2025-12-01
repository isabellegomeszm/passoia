import { useState } from "react";
import "./productscard.scss";
import { StarIcon } from "@heroicons/react/24/solid";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useBag } from "../../../context/BagContext";

function ProductCard({ product }) {

  const { addToBag } = useBag();

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
    type === "variable" && variations.length > 0 ? variations[0] : { price }
  );

  const displayedImage = 
    type === "variable"
    ? selectedColor?.image
    : image || defaultImage;

  const displayedPrice =
  variations && variations.length > 0
    ? selectedColor?.price
    : price;


  const handleAdd = () => {
    addToBag({
      name,
      price: displayedPrice,
      image: displayedImage,
      variation: selectedColor?.colorName || null,
      quantity: 1,
    });
  };

  return (
    <div className="product-card">
      <div className="rating">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
          <StarIcon key={i} className="star" />
        ))}
      </div>

      <img className="product-img" src={displayedImage} alt={name} />

      <h4>{name}</h4>

      {type === "variable" && (
        <div className="variations">
          <p className="variation-title"><strong>{selectedColor?.colorName}</strong> </p>

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
        </div>
      )}

      <p className="price">R$ {type === "variable" ? Number(selectedColor?.price || 0).toFixed(2) : Number(price).toFixed(2)}</p>

      
      <div className="btn-icon">
        <button className="add-btn" onClick={handleAdd}>
          Add to Bag
          <HiOutlineShoppingBag className="bag-icon" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
