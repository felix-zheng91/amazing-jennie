import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue);
  useEffect(
    () => window.localStorage.setItem(key, message.toString()),
    [key, message]
  );

  return [message, setMessage];
}
