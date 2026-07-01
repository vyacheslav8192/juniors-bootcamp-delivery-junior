import clsx from "clsx";
import { type ComponentProps, type ReactNode, useId } from "react";

import styles from "./input.module.css";

type RenderSection = (props: { iconSize: number }) => ReactNode;

namespace Input {
  export type ContainerProps = Omit<ComponentProps<"label">, "htmlFor">;
  export type Props = Omit<ComponentProps<"input">, "size"> & {
    containerProps?: ContainerProps;
    htmlSize?: ComponentProps<"input">["size"];
    renderLeftSection?: ReactNode | RenderSection;
    renderRightSection?: ReactNode | RenderSection;
    size?: Size;
  };
  export type Size = "large" | "regular" | "small";
}

const Input = (props: Input.Props) => {
  const {
    className,
    containerProps,
    renderLeftSection,
    renderRightSection,
    size = "regular",
    ...restProps
  } = props;
  const { className: containerClassName, ...restContainerProps } =
    containerProps ?? {};

  const inputId = useId();
  const iconSize = size === "large" ? 20 : 16;

  return (
    <label
      className={clsx(styles.inputContainer, containerClassName)}
      data-size={size}
      htmlFor={inputId}
      {...restContainerProps}
    >
      <div className={clsx(styles.section, styles.left)}>
        {typeof renderLeftSection === "function"
          ? renderLeftSection({ iconSize })
          : renderLeftSection}
      </div>
      <input
        className={clsx(styles.input, className)}
        id={inputId}
        {...restProps}
      />
      <div className={clsx(styles.section, styles.right)}>
        {typeof renderRightSection === "function"
          ? renderRightSection({ iconSize })
          : renderRightSection}
      </div>
    </label>
  );
};

export { Input };
