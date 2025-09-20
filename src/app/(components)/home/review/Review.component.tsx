import type { FC } from 'react';
import { type Review as ReviewType } from "@/interfaces/review";
import Image from 'next/image';
import styles from './styles.module.css';
import { Star } from 'lucide-react';

type Props = Readonly<{
  review: ReviewType;
}>;

export const Review: FC<Props> = ({ review }) => {
  const { imageUrl, name, title, comment, rating } = review;

  return (
    <section className={styles.review}>
      <figure className={styles.figure}>
        <Image
          src={imageUrl}
          alt={`${name} reviewer`}
          width={250}
          height={250}
          className={styles.image}
        />
      </figure>

      <div className={styles['name-title']}>
        <h3 className={styles.heading}>{name}</h3>
        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.rating}>
        {Array(rating).fill(null).map((_, index) => (
          <Star key={index} className={styles.starIcon} />
        ))}
      </div>

      <p className={styles.comment}>{comment}</p>
    </section>
  );

};

export default Review;
