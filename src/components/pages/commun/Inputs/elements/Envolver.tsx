import type { CommonInputProps } from "../types";

export default function InputEnvolver(
  props: CommonInputProps & {
    children?: React.ReactNode;
    className?: string;
  }
) {
  return (
    <div className={"input-group flex flex-col gap-2 " + props.className}>
      <label className="flex flex-col gap-[5px]">
        {props.label}
        {props.children}
      </label>
    </div>
  );
}
