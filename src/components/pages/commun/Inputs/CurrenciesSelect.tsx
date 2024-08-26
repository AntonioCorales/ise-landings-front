import useCurrencies from "@/utils/useCurriencies";
import type { SelectType } from "./types";
import Select from "./Select";

export default function CurrenciesSelect(props: CurrenciesSelectProps) {
  const currencies = useCurrencies();
  return (
    <Select
      {...props}
      label={props.label ?? "Moneda"}
      options={currencies.map((currency) => ({
        label: (
          <div className="flex gap-2 items-center" key={currency.id}>            
            <span className="flex-1">{currency.nameSpanish}</span>
          </div>
        ),
        value: currency.code,
        matches: [currency.name, currency.nameSpanish],
      }))}      
    />
  );
}

interface CurrenciesSelectProps extends Omit<SelectType, "options"> {}
