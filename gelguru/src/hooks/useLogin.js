import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (loginData) => loginApi(loginData),
    onSuccess: (data) => {
      login(data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User signin successfully");
      navigate("/home/main");
    },
    onError: () => {
      toast.error("Errow while register");
    },
  });

  return { mutate, isPending };
}
