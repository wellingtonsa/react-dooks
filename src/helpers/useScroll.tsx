import { useState, useEffect } from "react";

export default (callback?: () => void, value?: number) => {
  
  const isClient = typeof window === "object";
  const [percentage, setPercentage] = useState<number>(0);
  
  useEffect((): any => {
    if (!isClient) {
      return false;
    }

    const handleScroll = (): any => {
      let percentage = Math.round((window.scrollY * 100) / document.documentElement.scrollHeight);
      setPercentage(percentage);
      if (percentage === value && callback) callback();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return percentage;
};
