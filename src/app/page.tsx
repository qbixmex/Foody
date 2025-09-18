import { FC } from "react";
import { Container } from "./(components)/container/container";
import { Header } from "./(components)/header/Header.component";
import { Hero } from "./(components)/hero/Hero.component";

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default HomePage;