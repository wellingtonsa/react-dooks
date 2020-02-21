import { useMemo, useState } from "react";

export default (callback?: () => void, value?: number): number => {
  const isClient = typeof window === "object";
  const [percentage, setPercentage] = useState<number>(0);

  useMemo((): any => {
    if (!isClient) {
      return false;
    }

    const handleScroll = (): any => {
      const { body, documentElement } = document;
      let percentage = ((documentElement.scrollTop || body.scrollTop) / ((documentElement.scrollHeight || body.scrollHeight) - documentElement.clientHeight)) * 100;
      if (percentage === value && callback) callback();
      setPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return percentage;
};
