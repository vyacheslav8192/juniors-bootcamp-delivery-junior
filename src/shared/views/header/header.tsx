import type { PropsWithChildren } from "react";

import { HistoryIcon, LogOutIcon, UserIcon } from "lucide-react";

import deliveryBoxImage from "~/assets/images/delivery-box.png";

import { Button } from "../ui-kit/button/button";
import { IconButton } from "../ui-kit/icon-button/icon-button";
import styles from "./header.module.css";

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

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoSection}>
          <img height={24} src={deliveryBoxImage} width={24} />
          <h1 className={styles.title}>Delivery</h1>
        </div>
        <div className={styles.actions}>
          <div className={styles.links}>
            <HeaderIconButton>
              <HistoryIcon size={20} />
            </HeaderIconButton>
            <HeaderIconButton>
              <UserIcon size={20} />
            </HeaderIconButton>
          </div>
          <Button rightSection={<LogOutIcon size={16} />}>Выйти</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
