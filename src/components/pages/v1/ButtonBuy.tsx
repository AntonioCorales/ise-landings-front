import type { Details } from "@/content/type";
import { joinURL } from "@/utils/functions";

export default function ButtonBuy(props: ButtonBuyProps) {
  const { details } = props;
  const { input, version } = details || {};

  const slug = joinURL("/v1", input?.slug || "", "comprar");

  const handleClick = () => {
    console.log(details?.input?.name);
  };

  return (
    <a
      {...props}
      href={slug}
      onClick={handleClick}
      className={
        "flex items-center text-center rounded-lg py-2 px-5 bg-[var(--yellow-1)] text-[var(--dark-1)] font-semibold " + props.className
      }
    />
  );
}

interface ButtonBuyProps {
  details: Details | null;
  children?: React.ReactNode;
  className?: string;
}
