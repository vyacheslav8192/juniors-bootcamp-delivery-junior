import clsx from "clsx";
import { BaseButton } from "../base-button/base-button";
import styles from "./icon-button.module.css";

namespace IconButton {
  export type Radius = "default" | "round";
  export type Size = "large" | "regular" | "small";
  export type Variant = BaseButton.Variant;
  export type Props = BaseButton.Props & { size?: Size; radius?: Radius };
}

const IconButton = (props: IconButton.Props) => {
  const {
    children,
    className,
    size = "regular",
    radius = "default",
    ...restProps
  } = props;

  return (
    <BaseButton
      className={clsx(styles.button, className)}
      data-size={size}
      data-radius={radius}
      {...restProps}
    >
      {children}
    </BaseButton>
  );
};

export { IconButton };
