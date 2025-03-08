import React from "react";
import styles from "./style.module.css";
import Header from "./header/Header";


type PropsLayout = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Layout: React.FC<PropsLayout> = ({ children }) => {
  
  return (
    <>
      <Header />
      <main className={styles.page}>{children}</main>
    </>
  );
};

export default Layout;