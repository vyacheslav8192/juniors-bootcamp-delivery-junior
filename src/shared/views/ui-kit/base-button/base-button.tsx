import type { ComponentProps } from "react";

import clsx from "clsx";

import styles from "./base-button.module.css";

namespace BaseButton {
  export type Props = ComponentProps<"button"> & { variant?: Variant };
  export type Variant = "ghost" | "outline" | "primary" | "secondary";
}

const BaseButton = (props: BaseButton.Props) => {
  const { className, variant = "primary", ...restProps } = props;

  return (
    <button
      className={clsx(styles.button, className)}
      data-variant={variant}
      type="button"
      {...restProps}
    />
  );
};

export { BaseButton };
