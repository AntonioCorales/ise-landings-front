import { useEffect, useState } from "react";

export type PaymentMethodEnum = "PAYPAL" | "CULQI" | "DLOCAL" | "PAGOEFECTIVO";

export type PaymentMethodType = {
    name: string;
    images: string[];
    method: PaymentMethodEnum;
    currency: string[];
  };

const paymentMethods : PaymentMethodType[] = [
  {
    name: "Pagar con PayPal",
    images: ["https://storage.googleapis.com/ise-academy/checkout/paypal.webp"],
    method: "PAYPAL",
    currency: ["USD"],
  },
  {
    name: "Pagar con Tarjeta de Crédito/Débito o YAPE (Válido solo para Perú)",
    images: [
      "https://storage.googleapis.com/ise-academy/checkout/Visa_logo.webp",
      "https://storage.googleapis.com/ise-academy/checkout/yape-logo.webp",
    ],
    method: "CULQI",
    currency: ["PEN", "USD"],
  },
];



export default function usePaymentMethods(props?: { currency?: string }) {
  const [filteredPaymentMethods, setFilteredPaymentMethods] = useState<
    PaymentMethodType[]
  >(paymentMethods);
  useEffect(() => {
    const filteredPaymentMethods = paymentMethods.filter((method) => {
      return (
        method.currency.some((currency) =>
          props?.currency?.includes(currency)
        )
      );
    });
    setFilteredPaymentMethods(filteredPaymentMethods);
  }, [props?.currency]);
  return filteredPaymentMethods;
}
