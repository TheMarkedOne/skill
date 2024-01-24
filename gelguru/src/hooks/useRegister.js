import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (registerData) => registerUser(registerData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User Registered successfully");
      navigate("/signin");
    },
    onError: () => {
      toast.error("Errow while register");
    },
  });
  return { mutate, isPending };
}
