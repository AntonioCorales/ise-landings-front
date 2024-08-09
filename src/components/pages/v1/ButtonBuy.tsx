"use client";

import type { Details } from "@/content/type";

export default function ButtonBuy(props: ButtonBuyProps) {
  const { details } = props;

  const handleClick = () => {
    console.log(details?.input?.name);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={
        "rounded-lg py-3 px-5 bg-[var(--yellow-1)] text-[var(--dark-1)] font-semibold " + props.className
      }
    />
  );
}

interface ButtonBuyProps {
  details: Details | null;
  children?: React.ReactNode;
  className?: string;
}
