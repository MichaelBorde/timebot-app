import { LargeTitle, Text } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

export function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <LargeTitle weight={"1"}>Time is</LargeTitle>
      <Text>{time.toLocaleString()}</Text>
    </div>
  );
}
