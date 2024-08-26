import type { Country } from "@/content/type";
import { useEffect, useState } from "react";
import Countries from "@/content/countries.json";

export default function useCountries(props?: UseCountriesProps) {
  const countries = Countries;
  const { search } = props || {};
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);


  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      if (search && search.length > 0) {
        return (
          country.name.toLowerCase().startsWith(search.toLowerCase()) ||
          country.nativeName
            .toLowerCase()
            .startsWith(search.toLowerCase())
            
        );
      }
      return true;
    });
    setFilteredCountries(filteredCountries);
  }, [search]);

  return filteredCountries;
}

interface UseCountriesProps {
  search?: string;
}
