import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        appearance={{
          baseTheme: dark,
        }}
      >
        <Toaster position="top-right" />
        <App />
      </ClerkProvider>
  </React.StrictMode>
);
