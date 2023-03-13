import { ReactNode } from "react";
import { UserProvider } from "./UserContext";

interface iChildren {
  children: ReactNode;
}

const Providers = ({ children }: iChildren) => (
  <UserProvider>
    {children}
  </UserProvider>
);

export default Providers;
