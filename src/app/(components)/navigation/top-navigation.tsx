'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

const links = [
  { url: "/menu", label: "Menu" },
  { url: "/locations", label: "Locations" },
  { url: "/about", label: "About" },
  { url: "/blog", label: "Blog" },
];

export const TopNavigation = () => {
  const path = usePathname();

  return (
    <nav className={styles.navigation}>
      {links.map(({ url, label }) => (
        <div key={url}>
          <Link
            href={url}
            className={cn(styles.navLink, "group", {
              [styles.navLinkActive]: path === url
            })}
          >
            {label}
            <hr className={cn([
              styles.underline,
              url === path ? styles.active : "group-hover:bg-accent!",
              ])}
            />
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default TopNavigation;