import type React from "react";

export type CommonInputProps = {
  label?: string;
};
export type InputBaseType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
    preInput?: React.ReactNode;
    postInput?: React.ReactNode;
}

export type InputType = InputBaseType & CommonInputProps;

export type SelectType = CommonInputProps & {
  value?: string [];
  defaultValue?: string[];
  onChange: (value: string[]) => void;
  options: SelectOptionType[];
  multiple?: boolean;
};

export type SelectOptionType = {
  label: React.ReactNode;
  value: string;
  matches?: string[];
};
