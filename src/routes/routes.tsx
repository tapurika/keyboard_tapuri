import HomePage from "@/pages/Home";
import KeyboardPage from "@/pages/Keyboard";

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
    Element: KeyboardPage,
    path: "",
  },
  {
    text: "کیبرد آنلاین",
    Element: KeyboardPage,
    path: "/keyboard",
  },
  {
    text: "آموزش صداها",
    Element: HomePage,
    path: "/teaching",
  },
  {
    text: "درباره ی ما",
    Element: HomePage,
    path: "/about-us",
  },
];

export default ROUTES;
