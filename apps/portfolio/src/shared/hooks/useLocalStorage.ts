import { useEffect, useState } from 'react';

function serializeJSON(value: string) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error('Failed to serialize the value');
  }
}

function deserializeJSON(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export function useLocalStorage(key: string, defaultValue: string | undefined = undefined) {
  const [value, setLocalStorageValue] = useState(() => {
    const localStorageItem = localStorage.getItem(key);
    if (localStorageItem === null) return defaultValue;
    return deserializeJSON(localStorageItem);
  });

  useEffect(() => {
    window.localStorage.setItem(key, serializeJSON(value));
  }, [value]);

  return [value, setLocalStorageValue] as const;
}
