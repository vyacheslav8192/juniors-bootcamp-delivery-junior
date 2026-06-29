import type { PropsWithChildren } from "react";

import styles from "./layout-container.module.css";

namespace LayoutContainer {
  export type Props = PropsWithChildren;
}

const LayoutContainer = (props: LayoutContainer.Props) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};

export { LayoutContainer };
