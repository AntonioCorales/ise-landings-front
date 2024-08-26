import type { Details } from "@/content/type";
import { lazy, Suspense } from "react";
const CartPage = lazy(() => import("./CartPage"));

export default function CartSuspense(props: {
    details?: Details | null;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPage details={props.details} />
    </Suspense>
  )
}
