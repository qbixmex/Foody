import { FaUtensils } from "react-icons/fa6";
import styles from "./styles.module.css";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <div className={styles.iconContainer}>
          <FaUtensils className={styles.logoIcon} />
        </div>
        <span className={styles.logoLabel}>Foody</span>
      </div>
    </Link>
  );
};

export default Logo;