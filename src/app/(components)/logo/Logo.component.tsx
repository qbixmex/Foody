import { FaUtensils } from "react-icons/fa6";
import styles from "./styles.module.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <div className={styles.iconContainer}>
          <FaUtensils className={cn(styles.logoIcon, 'text-secondary dark:text-light')} />
        </div>
        <span className={styles.logoLabel}>Foody</span>
      </div>
    </Link>
  );
};

export default Logo;