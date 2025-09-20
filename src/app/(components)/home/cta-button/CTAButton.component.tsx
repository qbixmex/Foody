'use client';

import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from "./styles.module.css";

type Props = Readonly<{
  children?: string;
  dark?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: ReactNode;
  alone?: boolean;
  onClick?: () => void;
}>;

export const CTAButton: FC<Props> = (props) => {
  const {
    children,
    iconPosition,
    icon,
    alone = false,
    onClick,
  } = props;

  return (
    <button
      className={cn(styles.button, {
        "px-4!": alone === true && !children,
      })}
      onClick={onClick}
    >
      { icon && iconPosition === 'left' && icon }
      { (!children && !alone) ? 'text' : children }
      { icon && iconPosition === 'right' && icon }
    </button>
  );

};

export default CTAButton;
