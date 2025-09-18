import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

type Props = Readonly<{
  image: ReactNode;
  label: string;
  mode?: 'light' | 'dark';
}>;

export const FoodCard: FC<Props> = ({ image, label, mode = 'light' }) => {
  return (
    <div className={cn(styles.card, {
      [styles.light]: mode === 'light',
      [styles.dark]: mode === 'dark',
    })}>
      <div className={cn(styles.image, {
        "bg-secondary/50": mode === 'light',
        "bg-light": mode === 'dark',
      })}>
        {image}
      </div>
      <p className={cn(styles.label, {
        "text-accent": mode === 'light',
        "text-light": mode === 'dark',
      })}>{label}</p>
    </div>
  );
};

export default FoodCard;
