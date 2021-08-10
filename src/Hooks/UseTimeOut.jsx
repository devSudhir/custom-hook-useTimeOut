import { useEffect, useState } from "react";

export const useTimeOut = (delay) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setStatus(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [status];
};
