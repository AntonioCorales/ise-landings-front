import React, { useEffect, useRef, useState, type ReactNode } from "react";
import type { SelectOptionType, SelectType } from "./types";
import InputBase from "./elements/InputBase";
import InputEnvolver from "./elements/Envolver";
import { Dropdown } from "@/components/icons";

export default function Select(props: SelectType) {
  const [selectedValues, setSelectedValues] = useState<string[] | undefined>(
    []
  );

  const [inputText, setInputText] = useState("");

  const filteredOptions = useOptions({
    options: props.options,
    search: inputText,
  });

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.defaultValue) {
      setSelectedValues(props.defaultValue);
    }
  }, [props.defaultValue]);

  useEffect(() => {
    if (props.value) {
      setSelectedValues(props.value ?? []);
    }
  }, [props.value]);

  useEffect(() => {
    props.onChange(selectedValues ?? []);
  }, [selectedValues]);

  useEffect(() => {
    if (!ref.current) return;

    window.addEventListener("click", (e) => {
      if (!ref.current) return;
      console.log(e.target);
      if (!e.target) {
        setIsOpen(false);
        setInputText("");
        return;
      }
      if (!ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        setInputText("");
      }
    });
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-2 group relative">
      <InputEnvolver label={props.label}>
        <div
          className="flex flex-col gap-2"
          ref={ref}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <InputBase
            className="cursor-pointer"
            preInput={
              <div
                className={inputText.length > 0 && isOpen ? "hidden" : "mr-2"}
              >
                {props.options
                  .filter((option) => selectedValues?.includes(option.value))
                  .map((option) => option.label)}
              </div>
            }
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
            }}
            postInput={<Dropdown className="w-6 h-6" />}
          />
        </div>
      </InputEnvolver>
      <Options
        className={isOpen ? "" : "hidden"}
        options={filteredOptions}
        onChange={(option) => {
          setInputText("");
          setIsOpen(false);
          if (props.multiple) {
            if (!selectedValues) {
              setSelectedValues([]);
              return;
            }
            setSelectedValues(
              selectedValues.includes(option.value)
                ? selectedValues.filter((value) => value !== option.value)
                : [...selectedValues, option.value]
            );
          } else {
            setSelectedValues([option.value]);
          }
        }}
      />
    </div>
  );
}

function Options(props: {
  options: SelectOptionType[];
  className?: string;
  onChange: (value: SelectOptionType) => void;
}) {
  return (
    <div
      className={
        "absolute top-full z-10 flex flex-col bg-[--dark-2] w-full max-h-44 overflow-y-auto border-[--dark-2] border-[1px] border-solid " +
        props.className
      }
    >
      {props.options.map((option, index) => (
        <Option
          option={option}
          onChange={props.onChange}
          key={option.value + index}
        />
      ))}
    </div>
  );
}

function Option(props: {
  option: SelectOptionType;
  onChange: (value: SelectOptionType) => void;
}) {
  return (
    <div
      className="flex flex-col gap-2 hover:bg-[--dark-1] py-2 px-2 cursor-pointer"
      onClick={() => props.onChange(props.option)}
    >
      {props.option.label}
    </div>
  );
}

function useOptions(props: { options: SelectOptionType[]; search: string }) {
  const [filteredOptions, setFilteredOptions] = useState<SelectOptionType[]>(
    props.options
  );
  useEffect(() => {
    const filteredOptions = props.options.filter((option) => {
      return (
        option.value.toLowerCase().startsWith(props.search.toLowerCase()) ||
        option.matches?.some((match) =>
          match.toLowerCase().startsWith(props.search.toLowerCase())
        )
      );
    });
    setFilteredOptions(filteredOptions);
  }, [props.search]);
  return filteredOptions;
}
