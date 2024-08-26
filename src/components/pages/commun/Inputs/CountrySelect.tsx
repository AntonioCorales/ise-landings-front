import useCountries from "@/utils/useCountries";
import Select from "./Select";
import type { SelectType } from "./types";

export default function CountrySelect(props: CountrySelectProps) {
  const countries = useCountries({});
  return (
    <Select
      {...props}
      label={props.label ?? "País"}
      options={countries.map((country) => ({
        label: (
          <div className="flex gap-2 items-center" key={country.id}>
            <img src={country.flag} className="size-4 rounded-full" />
            <span className="flex-1">{country.nativeName}</span>
          </div>
        ),
        value: country.alpha3Code,
        matches: [country.name, country.alpha3Code, country.nativeName],
      }))}
    />
  );
}

interface CountrySelectProps extends Omit<SelectType, "options"> {}
