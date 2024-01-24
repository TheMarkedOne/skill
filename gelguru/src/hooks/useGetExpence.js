import { useQuery } from "@tanstack/react-query";
import { getYourExpence } from "../api/api";
import { useAuth } from "../context/useAuth";

export function useGetExpence() {
  const { authTokens } = useAuth();
  console.log(authTokens);
  const token = authTokens?.access;
  const { data, isPending } = useQuery({
    queryKey: ["expenceData"],
    queryFn: () => getYourExpence(token),
  });

  return { data, isPending };
}
