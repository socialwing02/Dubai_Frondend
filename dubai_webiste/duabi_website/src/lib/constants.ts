import { NavlistType } from "./types";

export const navlist: NavlistType[] = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Hotel", path: "/web-development" },
      { name: "Construction", path: "/app-development" },
      { name: "Travels", path: "/graphic-design" },
      { name: "Saloon", path: "/saloon" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
  },
  { name: "Contact Us", path: "/contact" },
];
