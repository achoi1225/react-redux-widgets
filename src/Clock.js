import React, {useState, useEffect} from 'react';


const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    }
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      Clock
    </h1>
  )
}

export default Clock
