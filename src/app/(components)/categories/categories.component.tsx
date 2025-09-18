import { FoodCard } from "../food-card/FoodCard.component";
import Image from "next/image";
import styles from "./styles.module.css";

const categories = [
  { url: "/images/pizza.png", label: "Pizza" },
  { url: "/images/taco.png", label: "Taco" },
  { url: "/images/sushi.png", label: "Sushi" },
  { url: "/images/drink.png", label: "Drink" },
  { url: "/images/dessert.png", label: "Dessert" },
  { url: "/images/salad.png", label: "Salad" },
];

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
            mode="light"
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
