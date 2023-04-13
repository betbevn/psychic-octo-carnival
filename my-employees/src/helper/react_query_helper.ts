import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2, staleTime: 10000 } },
});
