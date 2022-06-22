import { useState, useEffect } from 'react';

export function useWidth() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight]= useState<number>(0);

  const listener = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  };

  useEffect(() => {
    window.addEventListener('resize', listener);
    return () => {window.removeEventListener('resize', listener);}
  });

  return {
    width,height
  };
}