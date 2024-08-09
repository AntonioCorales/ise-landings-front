import { useCounter } from "@/utils/useCounter";

export default function Counter(props: CounterProps) {
  const { dateEnd } = props;
  const counter = useCounter(dateEnd);
  return (
    <div className="text-center">
      {counter.daysString}:{counter.hoursString}:{counter.minutesString}:
      {counter.secondsString}
    </div>
  );
}

interface CounterProps {
  className?: string;
  dateEnd?: Date;
}
