import { NavlistType } from "./types";

export const navlist: NavlistType[] = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Web Development", path: "/web-development" },
      { name: "Mobile App Development", path: "/app-development" },
      { name: "Graphic Designing", path: "/graphic-design" },
      { name: "Video-Editing", path: "/video-editing" },
      { name: "Social Media Marketing", path: "/video-editing" },
      { name: "Ads Campaign", path: "/video-editing" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
    children: [
      { name: "Our Story", path: "/our-story" },
      { name: "Events", path: "/events" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];
