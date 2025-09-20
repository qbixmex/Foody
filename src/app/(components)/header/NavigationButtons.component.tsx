import { navigationButtons } from "@/data/navigation";
import NavigationButton from "../navigation-button/NavigationButton.component";
import styles from "./styles.module.css";

export const NavigationButtons = () => {
  return (
    <div className={styles.navigationButtons}>
      {navigationButtons.map(({ type, url, visible }) => (
        <NavigationButton
          key={type}
          type={type}
          visible={visible}
          url={url}
        />
      ))}
    </div>
  );
};

export default NavigationButtons;
