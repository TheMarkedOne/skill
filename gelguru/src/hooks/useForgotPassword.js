import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forgotPasswordApi } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useForgorPassword() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (newData) => forgotPasswordApi(newData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User Successfully Changes Password");
    },
    onError: () => {
      toast.error("Error while changing password");
    },
  });

  return { mutate, isPending };
}
