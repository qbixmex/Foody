'use client';

import NavigationButton from "../navigation-button/NavigationButton.component";
import { useTheme } from "next-themes"
import {
  FaSearch as SearchIcon,
  FaShoppingCart as CartIcon,
  FaMoon as MoonIcon,
  FaSun as SunIcon,
} from "react-icons/fa";
import { LogIn as LogInIcon, LogOutIcon } from "lucide-react";
import styles from "./styles.module.css";

export const NavigationButtons = () => {
  const { setTheme, theme } = useTheme();

  const handleTheme = (theme: 'light' | 'dark') => {
    setTheme(theme);
  };

  return (
    <div className={styles.navigationButtons}>
      <NavigationButton visible={false}>
        <SearchIcon className="text-light dark:text-dark" />
      </NavigationButton>

      <NavigationButton visible={false}>
        <CartIcon />
      </NavigationButton>

      <button onClick={() => handleTheme(theme == 'light' ? 'dark' : 'light')}>
        <NavigationButton visible={true}>
        {
          (theme === 'light')
            ? <MoonIcon className="text-light dark:text-dark" />
            : <SunIcon className="text-light dark:text-dark" />
        }
        </NavigationButton>
      </button>

      <NavigationButton visible={false}>
        <LogInIcon className="text-light dark:text-dark" />
      </NavigationButton>

      <NavigationButton visible={false}>
        <LogOutIcon className="text-light dark:text-dark" />
      </NavigationButton>
    </div>
  );
};

export default NavigationButtons;
