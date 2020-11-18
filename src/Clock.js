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

  let hours = time.getHours();
  let pm = hours > 12;
  hours = pm ? hours - 12 : hours;
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  return (
    <div className="clock">
      {hours} : {minutes} : {seconds} {pm ? 'pm' : 'am' }
    </div>
  )
}

export default Clock
