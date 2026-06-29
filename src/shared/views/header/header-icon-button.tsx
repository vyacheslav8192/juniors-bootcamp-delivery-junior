import type { PropsWithChildren } from "react";

import { IconButton } from "../ui-kit/icon-button/icon-button";

namespace HeaderIconButton {
  export type Props = PropsWithChildren;
}

const HeaderIconButton = (props: HeaderIconButton.Props) => {
  const { children } = props;

  return (
    <IconButton radius="round" size="small" variant="secondary">
      {children}
    </IconButton>
  );
};

export { HeaderIconButton };
