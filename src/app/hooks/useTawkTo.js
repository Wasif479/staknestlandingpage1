"use client"
import { useEffect } from 'react';

export const useTawkTo = (tawkToKey) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkToKey}/1hlujr3ah`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [tawkToKey]); // Only re-run effect if tawkToKey changes
};