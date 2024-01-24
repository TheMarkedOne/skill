import { useContext } from "react";
import { AuthContext } from "./UserContextProvider";

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("You use context outside of the AuthContext");

  return context;
}
