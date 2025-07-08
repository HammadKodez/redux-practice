// app/providers.jsx or components/ReduxProvider.jsx
"use client"; // This component must be a client component

import { Provider } from "react-redux";
import { store } from "@/store/index.js"; // Import your Redux store

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
