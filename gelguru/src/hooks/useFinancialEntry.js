import { useMutation, useQueryClient } from "@tanstack/react-query";
import { financialEntry } from "../api/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";

export function useFinancialEntry() {
  const { authTokens } = useAuth();
  console.log(authTokens);
  const token = authTokens.access;
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (incomeData) => financialEntry(incomeData, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entryData"] });
      toast.success("You successfully saved your data");
    },
    onError: () => {
      toast.error("Error while creating data");
    },
  });

  return { mutate, isPending };
}
