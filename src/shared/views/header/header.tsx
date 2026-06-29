import deliveryBoxImage from "~/assets/images/delivery-box.png";
import styles from "./header.module.css";
import { IconButton } from "../ui-kit/icon-button/icon-button";
import { HistoryIcon, UserIcon, LogOutIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Button } from "../ui-kit/button/button";

namespace HeaderIconButton {
  export type Props = PropsWithChildren;
}

const HeaderIconButton = (props: HeaderIconButton.Props) => {
  const { children } = props;

  return (
    <IconButton size="small" variant="secondary" radius="round">
      {children}
    </IconButton>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoSection}>
          <img width={24} height={24} src={deliveryBoxImage} />
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
