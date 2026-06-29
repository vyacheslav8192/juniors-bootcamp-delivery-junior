import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./base-button.module.css";

namespace BaseButton {
  export type Variant = "primary" | "secondary" | "outline" | "ghost";
  export type Props = ComponentProps<"button"> & { variant?: Variant };
}

const BaseButton = (props: BaseButton.Props) => {
  const { className, variant = "primary", ...restProps } = props;

  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      data-variant={variant}
      {...restProps}
    />
  );
};

export { BaseButton };
