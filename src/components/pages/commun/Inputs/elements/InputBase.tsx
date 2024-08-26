import type { InputBaseType } from "../types";

export default function InputBase(props: InputBaseType) {
  const { preInput, postInput, ...rest } = props;
  return (
    <div className={"flex flex-row w-full bg-[--dark-2] p-2 rounded-lg border-[1px] border-[--sky-2] focus-within:border-[--sky-3] " + props.className}>
      {props.preInput && <div className="min-w-fit">{props.preInput}</div>}
      <input
        {...rest}
        className={
          "bg-transparent w-full outline-none flex-1 " + props.className
        }
      />
      {props.postInput}
    </div>
  );
}
