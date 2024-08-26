import Currencies from "@/content/currencies.json";
import type { Currency } from "@/content/type";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function useCurrencies(props?: UseCurrenciesProps) {
  const currencies = Currencies.map((currency) => ({
    ...currency,
    createdAt: DateTime.fromISO(currency.createdAt).toJSDate(),
  }));
  const { search } = props || {};
  const [filteredCurrencies, setFilteredCurrencies] =
    useState<Currency[]>(currencies);

  useEffect(() => {
    const filteredCurrencies = currencies.filter((currency) => {
      if (search && search.length > 0) {
        return (
          currency.name.toLowerCase().startsWith(search.toLowerCase()) ||
          currency.nameSpanish.toLowerCase().startsWith(search.toLowerCase())
        );
      }
      return true;
    });
    setFilteredCurrencies(filteredCurrencies);
  }, [search]);

  return filteredCurrencies;
}

interface UseCurrenciesProps {
  search?: string;
}
