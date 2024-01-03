import { useQuery } from "@tanstack/react-query";
import { getApiKey } from "../queries/getApikey";

export const useGetApikey = () => {
  return useQuery({
    queryKey: ["apikey"],
    queryFn: () => getApiKey(),
    staleTime: 1000 * 5 * 5,
  });
};
