import { homeLinks, informationLinks } from "@/data/navigation";
import { Logo } from "../logo/Logo.component";
import styles from "./styles.module.css";
import { FaFacebookF as FacebookIcon } from "react-icons/fa6";
import { FaXTwitter as XIcon } from "react-icons/fa6";
import { FaInstagram as InstagramIcon } from "react-icons/fa6";
import { FaTiktok as TikTokIcon } from "react-icons/fa6";
import { FaYoutube as YoutubeIcon } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className={cn(styles.footer, 'border-gray-300 dark:border-gray-800')}>
      <section className={styles.data}>
        <div className={styles.logoSection}>
          <Logo />

          <div className="text-accent/80 dark:text-light/80 text-balance">
            <p className="mb-2">Your ultimate destination for all things food !</p>
            <p>Explore our extensive collection of mouthwatering recipes.</p>
          </div>
        </div>

        <div className={styles.menuSection}>
          <h2 className={cn(styles.menuHeading, 'text-accent dark:text-light')}>
            Main
          </h2>

          <ul className={styles.menuList}>
            {homeLinks.map(({ url, label }) => (
              <li key={label} className={cn(styles.menuItem, 'text-dark/80 dark:text-light/80')}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.menuSection}>
          <h2 className={cn(styles.menuHeading, 'text-accent dark:text-light')}>Information</h2>

          <ul className={styles.menuList}>
            {informationLinks.map(({ url, label }) => (
              <li key={label} className={cn(styles.menuItem, 'text-dark/80 dark:text-light/80')}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.addressSection}>
          <h2 className={cn(styles.addressHeading, 'text-accent dark:text-light')}>Address</h2>

          <div className={styles.addressDetails}>
            <p className="text-dark/80 dark:text-light/80">222 Grandville 2YK XBC, Vancouver, BC, CA.</p>
            <p className="text-dark/80 dark:text-light/80">From 10 am to 12 p.m</p>
          </div>
        </div>
      </section>

      <section className={styles.socialSection}>
        <a href="#">
          <div className={styles.socialLink}>
            <FacebookIcon />
          </div>
        </a>

        <a href="#">
          <div className={styles.socialLink}>
            <XIcon />
          </div>
        </a>

        <a href="#">
          <div className={styles.socialLink}>
            <InstagramIcon />
          </div>
        </a>

        <a href="#">
          <div className={styles.socialLink}>
            <TikTokIcon />
          </div>
        </a>

        <a href="#">
          <div className={styles.socialLink}>
            <YoutubeIcon />
          </div>
        </a>
      </section>

      <section className={cn(styles.copySection, 'text-accent/50 dark:text-light/50')}>
        <p>Copyright @ Foody 2025 - All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
