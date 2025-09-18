import { FC } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "Foody Restaurant App",
  description: "Delicious meals delivered to your door.",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', ...fonts)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
