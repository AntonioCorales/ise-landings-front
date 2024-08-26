import { getPrice } from "@/utils/functions";
import type { CartItem } from "./types";

export default function CartItem(props: { product?: CartItem | null }) {
  const price = getPrice(props.product?.price ?? 0, "USD");
  const originalPrice = getPrice(props.product?.originalPrice ?? 0, "USD");

  return (
    <article className="flex gap-4 flex-col relative">
      <div>
        <img
          src={props.product?.image}
          alt="logo"
          className="aspect-auto max-w-[150px]"
        />
      </div>
      <div className="flex gap-3">
        <div>
          <div>
            <h2 className="text-base font-semibold text-balance text-ellipsis hyphens-auto cart-item-title">
              {props.product?.name}
            </h2>
          </div>
          <div>
            <span className="line-through text-sm opacity-50">
              {originalPrice}
            </span>
          </div>
        </div>
        <div>
          <span className="text-xl text-[--sky-3]"> {price}</span>
        </div>
      </div>
    </article>
  );
}
