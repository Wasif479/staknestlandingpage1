"use client"
import { useEffect } from 'react';

const Candy = () => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Explicitly define the style object
  const widgetStyles = {
    minWidth: '320px',
    height: '700px'
  };

  return (
    <div id='Candy' 
      className="calendly-inline-widget mt-10" 
      data-url="https://calendly.com/staknest/30min"
      style={widgetStyles} // Pass the style object
    />
  );
};

export default Candy;