import { useEffect, useState } from "react";

function getDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
}
