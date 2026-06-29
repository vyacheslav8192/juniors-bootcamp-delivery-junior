import type { ReactNode } from "react";

import clsx from "clsx";

import { BaseButton } from "../base-button/base-button";
import styles from "./button.module.css";

namespace Button {
  export type Props = BaseButton.Props & {
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    size?: Size;
  };
  export type Size = "large" | "regular" | "small";
  export type Variant = BaseButton.Variant;
}

const Button = (props: Button.Props) => {
  const {
    children,
    className,
    leftSection,
    rightSection,
    size = "regular",
    ...restProps
  } = props;

  return (
    <BaseButton
      className={clsx(styles.button, className)}
      data-size={size}
      {...restProps}
    >
      <span className={styles.inner}>
        {leftSection ? (
          <span className={styles.section}>{leftSection}</span>
        ) : null}
        <span>{children}</span>
        {rightSection ? (
          <span className={styles.section}>{rightSection}</span>
        ) : null}
      </span>
    </BaseButton>
  );
};

export { Button };
