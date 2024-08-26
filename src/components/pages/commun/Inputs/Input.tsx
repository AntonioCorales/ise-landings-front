import InputEnvolver from "./elements/Envolver";
import InputBase from "./elements/InputBase";
import type { InputType } from "./types";

export default function Input(props: InputType) {
  const { label, ...rest } = props;
  return (
    <InputEnvolver label={label}>
      <InputBase {...rest} />
    </InputEnvolver>
  );
}


