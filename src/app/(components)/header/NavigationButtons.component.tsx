import { IconsType, NavigationButton } from "../navigation-button/NavigationButton.component";
import styles from "./styles.module.css";

const navigationButtons: {
  type: IconsType;
  url: string | undefined;
  visible: boolean;
}[] = [
  { type: "search", url: "", visible: true },
  { type: "cart", url: "cart", visible: true },
  { type: "light", url: "", visible: false },
  { type: "dark", url: "", visible: true },
  { type: "signIn", url: "/signin", visible: true },
  { type: "signOut", url: "/signout", visible: false },
];

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
