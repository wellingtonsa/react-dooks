import { useMemo } from "react";

export default (callback?: () => void, value?: number): number => {
  
  const isClient = typeof window === "object";
  let percentage:number = 0;
  
  useMemo((): any => {
    if (!isClient) {
      return false;
    }

    const handleScroll = (): any => {
      percentage = Math.round((window.scrollY * 100) / document.documentElement.scrollHeight);
      if (percentage === value && callback) callback();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return percentage;
};
