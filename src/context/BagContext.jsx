import { createContext, useContext, useState, useEffect } from "react";

const BagContext = createContext();

function BagProvider({ children }) {
  const [bag, setBag] = useState(() => {
    const saved = localStorage.getItem("bag");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

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
        setBag,
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
