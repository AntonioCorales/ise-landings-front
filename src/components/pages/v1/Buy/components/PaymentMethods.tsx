import CurrenciesSelect from "@/components/pages/commun/Inputs/CurrenciesSelect";
import usePaymentMethods, {
    type PaymentMethodEnum,
  type PaymentMethodType,
} from "@/utils/usePaymentMethods";
import { useCartContext } from "../useCartContext";
import { useState } from "react";

export default function PaymentMethods(props: PaymentMethodsProps) {
  const { setPaymentMethod } = useCartContext();
  const [currency, setCurrency] = useState<string>("USD");

  const methods = usePaymentMethods({ currency });
  return (
    <div className="flex flex-col gap-4">
      <CurrenciesSelect
        value={currency ? [currency] : undefined}
        onChange={(value) => {
          setCurrency(value[0]);
        }}
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">¿Cómo quieres pagar?</h3>
        {methods.map((method, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(method);
              setPaymentMethod(method.method);
              props.onClick?.();
            }}
          >
            <PaymentMethod {...method} />
          </button>
        ))}
      </div>
    </div>
  );
}

interface PaymentMethodsProps {
  onClick?: () => void;
}

function PaymentMethod(props: PaymentMethodType) {
  return (
    <div className="flex gap-4 items-center bg-[--dark-2] py-2 px-4 rounded-lg hover:outline outline-1 outline-[--sky-1]">
      <h3 className="flex-1 text-left">{props.name}</h3>
      <div className="flex gap-2">
        {props.images.map((image, index) => (
          <img key={index} src={image} alt="logo" className="w-auto h-8 " />
        ))}
      </div>
    </div>
  );
}
