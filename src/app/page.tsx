'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rubik } from "./fonts";
import { Main } from "./ui/Main";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div className={`${rubik.className}`}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </div>
  );
}
