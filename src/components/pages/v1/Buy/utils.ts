import { useStorage } from "@/utils/useStorage";
import React from "react";
import { useDetailsContext } from "./CartPage";
import type { Details } from "@/content/type";
import type { CartItem } from "./types";

interface CartStorage {
  id: string;
}

export function useCartStorage(key: string, initialValue: CartStorage[]) {
  const state = useStorage(key, initialValue);
  return state as [CartStorage[], React.Dispatch<React.SetStateAction<CartStorage[]>>];
}

export function useCartDetails() {
  const details = useDetailsContext();
  const [cart] = useCartStorage("cart", []);

  return {
    product: detailsToProduct(details),
    extras: cart,
    
  }
}

export function detailsToProduct(details: Details | undefined | null): CartItem {
  return {
    id: details?.input?.id ?? "",
    price: details?.input?.price ?? 0,
    originalPrice: details?.input?.normalPrice ?? 0,
    name: details?.input?.template.name ?? "",
    image: details?.input?.template.image ?? "",
  };
}
