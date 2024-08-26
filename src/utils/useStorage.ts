import { useEffect, useState } from "react";

export function useStorage(key: string, initialValue: any) {
  const state = useState(initialValue);
  const [storedValue, setStoredValue] = state;

  useEffect(() => {    
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      } else {
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, key]);

  return state;
}
