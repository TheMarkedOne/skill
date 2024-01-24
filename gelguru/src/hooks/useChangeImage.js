import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeImage } from "../api/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";

export function useChangeImage() {
  const { authTokens, setImage } = useAuth();
  console.log(authTokens);
  const token = authTokens.access;
  const queryClient = useQueryClient();
  const { mutateAsync: uploadImage, isPending: isUploading } = useMutation({
    mutationFn: (image) => changeImage(image, token),
    onSuccess: (data) => {
      setImage(data);
      console.log(data);
      toast.success("Image Successfully Changed");
      queryClient.invalidateQueries({ queryKey: ["storage"] });
    },
    onError: () => {
      toast.error("'Can't upload");
    },
  });

  return { uploadImage, isUploading };
}
