import "@telegram-apps/telegram-ui/dist/styles.css";

import { AppRoot, LargeTitle, Text } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

export function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppRoot appearance={"light"}>
      <LargeTitle weight={"1"}>Time is</LargeTitle>
      <Text>{time.toLocaleString()}</Text>
    </AppRoot>
  );
}
