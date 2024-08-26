import { useCartContext } from "../useCartContext";

export default function Purchase(props: BillingProps) {
  const { user, cart, paymentMethod } = useCartContext();
  return <div className="flex flex-col gap-2">{paymentMethod?.toString()}</div>;
}

interface BillingProps {
  onClick?: () => void;
}
