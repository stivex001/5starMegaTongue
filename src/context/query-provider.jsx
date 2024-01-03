/* eslint-disable react/prop-types */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProviders({ children }) {
  const queryclient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
    </>
  );
}
