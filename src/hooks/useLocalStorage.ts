import { useState } from "react";

export function useLocalStorage<T>(item: string){
  if (!localStorage.getItem(item)){
    localStorage.setItem(item, JSON.stringify([]))
  }
    
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ?? '') ?? '');

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  const removeLocalStorage = () => {
    setValue([]);
    localStorage.removeItem(item);
  }

  return {
    value,
    updateLocalStorage,
    removeLocalStorage
  }
}