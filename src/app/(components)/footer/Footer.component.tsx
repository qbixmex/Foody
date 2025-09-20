import { homeLinks, informationLinks } from "@/data/navigation";
import { Logo } from "../logo/Logo.component";
import styles from "./styles.module.css";
import { FaFacebookF as FacebookIcon } from "react-icons/fa6";
import { FaXTwitter as XIcon } from "react-icons/fa6";
import { FaInstagram as InstagramIcon } from "react-icons/fa6";
import { FaTiktok as TikTokIcon } from "react-icons/fa6";
import { FaYoutube as YoutubeIcon } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.data}>
        <div className={styles.logoSection}>
          <Logo />

          <div className={styles.footerDescription}>
            <p>Your ultimate destination for all things food !</p>
            <p>Explore our extensive collection of mouthwatering recipes.</p>
          </div>
        </div>

        <div className={styles.menuSection}>
          <h2 className={styles.menuHeading}>Main</h2>

          <ul className={styles.menuList}>
            {homeLinks.map(({ url, label }) => (
              <li key={label} className={styles.menuItem}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.menuSection}>
          <h2 className={styles.menuHeading}>Information</h2>

          <ul className={styles.menuList}>
            {informationLinks.map(({ url, label }) => (
              <li key={label} className={styles.menuItem}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.addressSection}>
          <h2 className={styles.addressHeading}>Address</h2>

          <div className={styles.addressDetails}>
            <p>222 Grandville 2YK XBC, Vancouver, BC, CA.</p>
            <p>From 10 am to 12 p.m</p>
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

      <section className={styles.copySection}>
        <p>Copyright @ Foody 2025 - All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
