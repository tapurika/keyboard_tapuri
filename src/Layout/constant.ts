import { IoHomeOutline } from "react-icons/io5";
// import { SiPagekit } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

interface ILinks {
  text: string;
  to: string;
  Icon: React.FC;
  css?: string;
  toList?: string[];
}

export const LINKS: ILinks[] = [
  {
    text: "خانه",
    to: "",
    Icon: IoHomeOutline,
  },
  {
    text: "نویسنده",
    to: "writer",
    Icon: TfiWrite,
  },
  {
    text: "درباره ی ما",
    to: "about-us",
    Icon: FaUser,
  },
  {
    text: "ارتباط با ما",
    to: "contact-us",
    Icon: IoShareSocialOutline,
  },
];
