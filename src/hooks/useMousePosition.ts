import { useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};
