import type { PropsWithChildren } from "react";

import { Header } from "../header/header";
import { LayoutContainer } from "../layout-container/layout-container";
import styles from "./layout.module.css";

namespace Layout {
  export type Props = PropsWithChildren;
}

const Layout = (props: Layout.Props) => {
  const { children } = props;

  return (
    <LayoutContainer>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </LayoutContainer>
  );
};

export { Layout };
