import { Link, NavButton } from "@/interfaces/navigation";

export const homeLinks: Link[] = [
  { url: "/menu", label: "Menu" },
  { url: "/locations", label: "Locations" },
  { url: "/about", label: "About" },
  { url: "/blog", label: "Blog" },
];

export const informationLinks: Link[] = [
  { url: "/contact", label: "Contact" },
  { url: "/privacy-policy", label: "Privacy Policy" },
  { url: "/videos", label: "Videos" },
  { url: "/Reservation", label: "Reservation" },
];

export const navigationButtons: NavButton[] = [
  { type: "search", url: "", visible: true },
  { type: "cart", url: "cart", visible: true },
  { type: "light", url: "", visible: false },
  { type: "dark", url: "", visible: true },
  { type: "signIn", url: "/signin", visible: true },
  { type: "signOut", url: "/signout", visible: false },
];
