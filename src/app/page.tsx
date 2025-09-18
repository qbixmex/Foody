import { FC } from "react";
import Header from "./(components)/header/Header.component";
import { Container } from "./(components)/container/container";

const HomePage: FC = () => {
  return (
    <Container>
      <Header />      
    </Container>
  );
};

export default HomePage;