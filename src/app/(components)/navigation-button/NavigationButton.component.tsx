'use client';

import { CSSProperties, FC } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { LogIn, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import Link from "next/link";

export type IconsType = "search" | "cart" | "light" | "dark" | "signIn" | "signOut";

type Props = Readonly<{
  type: IconsType;
  url?: string;
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
}>;

export const NavigationButton: FC<Props> = (props) => {
  const { type, url, className, style, visible = true } = props;

  if (!visible) {
    return null;
  }

  const icons = {
    search: FaSearch,
    cart: FaShoppingCart,
    light: FaSun,
    dark: FaMoon,
    signIn: LogIn,
    signOut: LogOut,
  };

  const Icon = icons[type];

  return (
    <div className={styles.iconWrapper}>
      {
        url && (
          <Link href={url}>
            <Icon
              className={cn(styles.btn, className)}
              style={style}
              aria-hidden={!visible}
            />
          </Link>
        )
      }

      {
        !url && (
          <button onClick={() => { }}>
            <Icon
              className={cn(styles.btn, className)}
              style={style}
              aria-hidden={!visible}
            />
          </button>
        )
      }
    </div>
  );
};

export default NavigationButton;
