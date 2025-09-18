import { Roboto_Mono, Montserrat, Poppins } from 'next/font/google';

const roboto_mono = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});

export const fonts = [
  montserrat.variable,
  poppins.variable,
  roboto_mono.variable,
];
