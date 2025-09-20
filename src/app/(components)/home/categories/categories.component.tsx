import { FoodCard } from "../food-card/FoodCard.component";
import Image from "next/image";
import styles from "./styles.module.css";
import { categories } from "@/data/categories";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.heading}>Categories</h2>

      <div className={styles.cards}>
        {categories.map(({ url, label }) => (
          <FoodCard
            key={url}
            image={
              <Image src={url} width={512} height={512} alt={label} />
            }
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
