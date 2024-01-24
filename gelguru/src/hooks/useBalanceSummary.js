import { useQuery } from "@tanstack/react-query";
import { getBalanceSummary } from "../api/api";
import { useAuth } from "../context/useAuth";

export function useBalanceSummary(period) {
  const { authTokens } = useAuth();
  console.log(authTokens);
  const token = authTokens?.access;
  const { data: summaryData, isPending: isSummaryDataPending } = useQuery({
    queryKey: ["data"],
    queryFn: () => getBalanceSummary(period, token),
  });

  return { summaryData, isSummaryDataPending };
}
