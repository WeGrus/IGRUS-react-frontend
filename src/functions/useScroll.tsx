import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  const delay = 15;

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {window.removeEventListener('scroll', listener);}
  });

  return {
    scrollY
  };
}