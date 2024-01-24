import { useQuery } from "@tanstack/react-query";
import { getYourFinances } from "../api/api";
import { useAuth } from "../context/useAuth";

export function useGetFinance() {
  const { authTokens } = useAuth();
  console.log(authTokens);
  const token = authTokens?.access;
  const { data, isPending } = useQuery({
    queryKey: ["entryData"],
    queryFn: () => getYourFinances(token),
  });

  return { data, isPending };
}
