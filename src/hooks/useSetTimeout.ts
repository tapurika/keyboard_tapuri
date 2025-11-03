import { useEffect, useState } from "react";

export function useSetTimeout(time = 1000) {
  const [isTimeout, setIsTimeout] = useState(false);

  const switchTime = () => {
    setIsTimeout(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTimeout) setIsTimeout(false);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [isTimeout]);

  return { isTimeout, switchTime };
}
