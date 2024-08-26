"use client";
import type { Details } from "@/content/type";
import CartPrice from "./CartPrice";
import { createContext, useContext, useState } from "react";
import { CartProvider } from "./useCartContext";
import UserData from "./components/UserData";
import PaymentMethods from "./components/PaymentMethods";
import Purchase from "./components/Purchase";

export default function CartPage(props: CartPageProps) {
  const { details } = props;
  const [detailsContext, setDetailsContext] = useState<
    Details | null | undefined
  >(details);
  const [tab, setTab] = useState<number>(0);

  return (
    <DetailContext.Provider value={detailsContext}>
      <CartProvider>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 cart-container">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 justify-center w-full rounded-lg ">
              {Array(3)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        "progress h-3 w-full border-[--sky-1] border-[1px] border-solid first:rounded-l-lg last:rounded-r-lg transition-colors " +
                        (tab === index ? "bg-[--sky-1]" : "")
                      }
                      onClick={() => {
                        setTab(index);
                      }}
                    />
                  );
                })}
            </div>
            {tab > 0 && (
              <div>
                <button
                  className="text-[--sky-2] text-sm font-semibold hover:text-[--sky-1]"
                  onClick={() => {
                    setTab((tab) => tab - 1);
                  }}
                >
                  Volver
                </button>
              </div>
            )}
            {tab === 0 && <UserData onClick={() => setTab(1)} />}
            {tab === 1 && <PaymentMethods onClick={() => setTab(2)} />}
            {tab === 2 && <Purchase />}
          </div>
          <div className="flex flex-col gap-2">
            <CartPrice />
          </div>
        </div>
      </CartProvider>
    </DetailContext.Provider>
  );
}

interface CartPageProps {
  details?: Details | null;
}

const DetailContext = createContext<Details | null | undefined>(null);

export function useDetailsContext() {
  return useContext(DetailContext);
}
