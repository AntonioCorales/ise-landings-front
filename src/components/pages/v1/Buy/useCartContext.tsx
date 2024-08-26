import { createContext, useContext, useState } from "react";
import type { CartItem } from "./types";
import type { Country } from "@/content/type";
import type { PaymentMethodEnum } from "@/utils/usePaymentMethods";

export type CartUserType = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: Country;
  dni: string;
};

type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  user: Partial<CartUserType>;
  setUser: (user: Partial<CartUserType>) => void;
  paymentMethod?: PaymentMethodEnum;
  setPaymentMethod: (paymentMethod: PaymentMethodEnum) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  user: {},
  setUser: () => {},
  setPaymentMethod: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<Partial<CartUserType>>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodEnum>();

  return (
    <CartContext.Provider
      value={{ cart, setCart, user, setUser, paymentMethod, setPaymentMethod }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
