'use client';

import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

type Props = Readonly<{
  image: ReactNode;
  label: string;
}>;

export const FoodCard: FC<Props> = ({ image, label }) => {
  return (
    <div className={cn(styles.card, 'border-2 border-gray-400/30 dark:border-light')}>
      <figure className={styles.figure}>
        {image}
      </figure>

      <p className={cn(styles.label, 'text-accent dark:text-light')}>
        {label}
      </p>
    </div>
  );
};

export default FoodCard;
