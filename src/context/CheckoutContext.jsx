import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [delivery, setDelivery] = useState(null);
  const [payment, setPayment] = useState(null);
  
  return (
    <CheckoutContext.Provider value={{ delivery, setDelivery, payment, setPayment }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext);
}
