import { SDKProvider } from "@tma.js/sdk-react";
import { App } from "./App";

export function Root() {
  return (
    <SDKProvider acceptCustomStyles debug>
      <App />
    </SDKProvider>
  );
}
