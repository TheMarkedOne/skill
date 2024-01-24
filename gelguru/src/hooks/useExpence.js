import { useMutation, useQueryClient } from "@tanstack/react-query";
import { expenceEntry } from "../api/api";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";

export function useexpenceEntry() {
  const { authTokens } = useAuth();

  const token = authTokens.access;

  const queryClient = useQueryClient();

  const { mutate: expence, isPending: isExpencePending } = useMutation({
    mutationFn: (expenceData) => expenceEntry(expenceData, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenceData"] });
      toast.success("You successfully saved your data");
    },
    onError: () => {
      toast.error("Error while creating data");
    },
  });

  return { expence, isExpencePending };
}
