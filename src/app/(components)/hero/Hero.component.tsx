'use client';

import { CTAButton } from "../cta-button/CTAButton.component";
import { ArrowRight, Play } from 'lucide-react';
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.details}>
        <h2 className={styles.heading}>
          <span>Bon Appétit</span>
          <span className={styles.headingHighlight}>Explore Culinary</span>
          <span>Creations</span>
        </h2>

        <p className={styles.description}>
          Your ultimate destination for all things food !<br />
          Explore our extensive collection of mouthwatering recipes.
        </p>

        <section className={styles.buttons}>
          <CTAButton
            iconPosition="right"
            icon={<ArrowRight />}
            onClick={() => router.push('#')}
          >Order Now</CTAButton>
          <p className={styles.demo}>
            Watch Demo&nbsp;
            <CTAButton
              iconPosition="right"
              icon={<Play className="fill-light" />}
              alone
              onClick={() => router.push('#')}
            />
          </p>
        </section>

      </div>
      <div className={styles.image}>
        <Image
          src="/images/woman-eating.webp"
          width={445}
          height={419}
          alt="woman eating"
        />
      </div>
    </div>
  );
};

export default Hero;