import { FC } from "react";
import { Hero } from "./(components)/home/hero/Hero.component";
import { Categories } from "./(components)/home/categories/categories.component";
import { Process } from "./(components)/home/process/Process.component";
import { Reviews } from "./(components)/home/reviews/Reviews.component";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Process />
      <Reviews />
    </>
  );
};

export default HomePage;
