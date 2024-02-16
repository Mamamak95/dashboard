import { throttle } from "lodash";
import { useEffect, useState } from "react";

const useViewSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = throttle(() => {
    setSize(() => {
      return { width: window.innerWidth, height: window.innerHeight };
    });
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useViewSize;
