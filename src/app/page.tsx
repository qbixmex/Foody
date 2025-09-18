import { FC } from "react";
import { Container } from "./(components)/container/container";
import { Header } from "./(components)/header/Header.component";
import { Hero } from "./(components)/hero/Hero.component";
import { Categories } from "./(components)/categories/categories.component";

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Categories />
    </Container>
  );
};

export default HomePage;