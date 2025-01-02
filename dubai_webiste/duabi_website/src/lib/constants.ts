import { NavlistType } from "./types";

export const navlist: NavlistType[] = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Hotel", path: "/hotel" },
      { name: "Construction", path: "/app-development" },
      { name: "Travels", path: "/travels" },
      { name: "Saloon", path: "/saloon" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
  },
  { name: "Contact Us", path: "/contact" },
];
