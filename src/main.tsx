import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DbProvider } from "./context/DbContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DbProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </DbProvider>
  </StrictMode>
);
