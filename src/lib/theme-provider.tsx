"use client";

import { FC, ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = ComponentProps<typeof NextThemesProvider>;

export const ThemeProvider: FC<Props> = ({ children, ...props }) => (
  <NextThemesProvider {...props}>
    {children}
  </NextThemesProvider>
);
