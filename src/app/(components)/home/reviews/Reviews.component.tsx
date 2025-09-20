'use client';

import type { FC } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Review } from '../review/Review.component';
import { reviews } from './data';
import styles from './styles.module.css';

export const Reviews: FC = () => {
  return (
    <div className={styles.reviewsSection}>
      <h2 className={styles.heading}>Reviews</h2>

      <section className={styles.reviews}>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[ Autoplay({ delay: 5000 }) ]}
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <Review review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default Reviews;
