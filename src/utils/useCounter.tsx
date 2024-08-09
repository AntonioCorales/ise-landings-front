import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export function useCounter(dateEnd?: Date) {
  const [counter, setCounter] = useState(0);
  const dateInit = DateTime.now();
  const dateEndInit = dateEnd
    ? DateTime.fromJSDate(dateEnd)
    : dateInit.endOf("day");

  useEffect(() => {
    if(counter === 0) {
        setCounter(Math.floor(dateEndInit.diff(dateInit).as("seconds")));
    }
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return useCounterFormatted(counter);
}

export function useCounterFormatted(timeInSeconds: number) {
  const days = Math.floor(timeInSeconds / (60 * 60 * 24));
  const hours = Math.floor((timeInSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    daysString: days.toString().padStart(2, "0"),
    hoursString: hours.toString().padStart(2, "0"),
    minutesString: minutes.toString().padStart(2, "0"),
    secondsString: seconds.toString().padStart(2, "0"),
  };
}
