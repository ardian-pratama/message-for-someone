import { useEffect, useRef, useState } from 'react';

export default function ThankYouMessage({ children }) {
  const [count, setCount] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      if (count === 1000000) {
        clearInterval(intervalId);
      }
    }, 250);

    return () => clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [count]);

  return (
    <div className='flex flex-col items-start gap-2'>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='flex gap-2'>
          {children}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
