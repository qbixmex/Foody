import type { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

type Props = Readonly<{
  heading: string;
  imageUrl: string;
  description: string;
}>;

export const ProcessCard: FC<Props> = ({ heading, imageUrl, description }) => {

  return (
    <section className={styles.processCard}>
      <figure className={styles.figure}>
        <Image
          src={imageUrl}
          alt={heading}
          width={512}
          height={512}
          className="bg-gray-300/50 dark:bg-gray-700/50"
        />
      </figure>

      <h3 className={styles.heading}>{ heading }</h3>

      <p className={styles.description}>{ description }</p>
    </section>
  );

};

export default ProcessCard;
