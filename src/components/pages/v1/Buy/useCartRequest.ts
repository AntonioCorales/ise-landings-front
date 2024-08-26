import type { CartItem } from "./types";
import {useQuery} from "react-query"

export function useCartRequest(id: string) {
  return useQuery<CartItem[]>(["cart", id], async () => {
    const res = await fetch(`/api/cart/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  }, { enabled: !!id });
 
}
