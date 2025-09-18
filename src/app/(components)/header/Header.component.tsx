import Logo from "../logo/Logo.component";
import TopNavigation from "../navigation/top-navigation";
import NavigationButtons from "./NavigationButtons.component";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <TopNavigation />
      <NavigationButtons />
    </header>
  );
};

export default Header;