import { useLayoutEffect } from 'react';

export const useScrollFreeze = () => {
  useLayoutEffect(() => {
    // get the original overflow value
    const original = window.getComputedStyle(document.body).overflow;
    // set overflow to hidden
    document.body.style.overflow = 'hidden';

    return () => {
      // Reset the overflow to original
      document.body.style.overflow = original;
    };
  }, []);
};
