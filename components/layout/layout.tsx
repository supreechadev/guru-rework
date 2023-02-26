import { FC, PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
