import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));

    // Dispara um evento global para forçar atualização em outros componentes
    window.dispatchEvent(new Event("storage"));
  };

  const removeLocalStorage = () => {
    setValue([] as T);
    localStorage.removeItem(key);

    window.dispatchEvent(new Event("storage"));
  };

  // Sincroniza o estado sempre que houver mudanças no localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const storedValue = localStorage.getItem(key);
      setValue(storedValue ? JSON.parse(storedValue) : []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return { value, updateLocalStorage, removeLocalStorage };
}