import { createContext, useContext, useState } from "react";

const BagContext = createContext();

function BagProvider({ children }) {
  const [bag, setBag] = useState([]);

  function addToBag(item) {
    setBag((prev) => {
      const existing = prev.find(
        (i) => i.name === item.name && i.variation === item.variation
      );

      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeFromBag(item) {
    setBag((prev) => prev.filter((i) => i !== item));
  }

  function increaseQuantity(item) {
    setBag((prev) =>
      prev.map((i) =>
        i === item ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }

  function decreaseQuantity(item) {
    setBag((prev) =>
      prev.map((i) =>
        i === item && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  }

  const totalPrice = bag.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = bag.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BagContext.Provider
      value={{
        bag,
        addToBag,
        removeFromBag,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export default BagProvider;

export function useBag() {
  return useContext(BagContext);
}
