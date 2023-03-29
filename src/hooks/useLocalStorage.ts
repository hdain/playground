import { Dispatch, SetStateAction, useState } from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>;
type UseLocalStorageResult<T> = [T, SetValue<T>];

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorageResult<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
