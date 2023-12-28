"use client";
import Home from "@/pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
