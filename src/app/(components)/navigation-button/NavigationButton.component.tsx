'use client';

import type { FC, ReactNode } from "react";
import { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

type Props = Readonly<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
}>;

export const NavigationButton: FC<Props> = (props) => {
  const {
    children,
    className,
    style,
    visible = true,
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <div
      className={cn(styles.iconWrapper, 'bg-dark dark:bg-white', className)}
      style={style}
    >
      { children }
    </div>
  );
};

export default NavigationButton;
