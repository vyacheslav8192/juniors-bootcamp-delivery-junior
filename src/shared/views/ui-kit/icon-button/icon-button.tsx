import clsx from "clsx";

import { BaseButton } from "../base-button/base-button";
import styles from "./icon-button.module.css";

namespace IconButton {
  export type Props = BaseButton.Props & { radius?: Radius; size?: Size; };
  export type Radius = "default" | "round";
  export type Size = "large" | "regular" | "small";
  export type Variant = BaseButton.Variant;
}

const IconButton = (props: IconButton.Props) => {
  const {
    children,
    className,
    radius = "default",
    size = "regular",
    ...restProps
  } = props;

  return (
    <BaseButton
      className={clsx(styles.button, className)}
      data-radius={radius}
      data-size={size}
      {...restProps}
    >
      {children}
    </BaseButton>
  );
};

export { IconButton };
