import HomePage from "@/pages/Home";

interface IRoutes {
  text: string;
  index?: boolean;
  path: string;
  Element?: React.FC;
  subRoute?: { index?: boolean; path: string; Element: React.FC }[];
}

const ROUTES: IRoutes[] = [
  {
    text: "خانه",
    index: true,
    Element: HomePage,
    path: "",
  },
  {
    text: "آموزش صداها",
    Element: HomePage,
    path: "/teaching",
  },
  {
    text: "کیبرد آنلاین",
    Element: HomePage,
    path: "/keyboard",
  },

  {
    text: "درباره ی ما",
    Element: HomePage,
    path: "/about-us",
  },
];

export default ROUTES;
