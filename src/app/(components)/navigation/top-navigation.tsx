'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { homeLinks } from "@/data/navigation";
import styles from "./styles.module.css";

export const TopNavigation = () => {
  const path = usePathname();

  return (
    <nav className={styles.navigation}>
      {homeLinks.map(({ url, label }) => (
        <div key={url}>
          <Link
            href={url}
            className={cn(styles.navLink, "group text-accent dark:text-light", {
              [styles.navLinkActive]: path === url
            })}
          >
            {label}
            <hr className={cn([
              styles.underline,
              url === path ? styles.active : "group-hover:bg-accent! group-hover:dark:bg-light!",
              ])}
            />
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default TopNavigation;