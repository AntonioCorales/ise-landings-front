import CartItem from "./CartItem";
import { useDetailsContext } from "./CartPage";

export default function CartPrice() {
  const details = useDetailsContext();  

  return (
    <div className="flex flex-col gap-4 bg-[--dark-2] p-4 rounded-lg">
      <h2 className="font-semibold text-xl">Tu carrito de compras</h2>
      <div className="flex flex-col gap-2">
        <CartItem
          product={{
            id: details?.input?.id ?? "",
            price: details?.input?.price ?? 0,
            originalPrice: details?.input?.normalPrice ?? 0,
            name: details?.input?.template.name ?? "",
            image: details?.input?.template.image ?? "",
          }}
        />
      </div>
      <div className="flex justify-between">
        <span>Total: </span>
          <span>$ 27.00</span>
      </div>
    </div>
  );
}
