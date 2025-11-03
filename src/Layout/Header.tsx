import { Link } from "react-router";

const styles = {
  root: `
    wrapper
    border-b-2 border-b-red-400
    py-5 pb-5 
    flex justify-between items-center

    font-iranYekan-400 text-[20px]
  `,
};

export default function Header() {
  return (
    <header className={styles.root}>
      <div className="flex items-center gap-10">
        <Link to={"/"}>خانه</Link>
        <Link to={"/keyboard"}>کیبرد آنلاین</Link>
        <Link to={"/teaching"}>آموزش اصوات طبری</Link>
        <Link to={"/about-us"}>درباره ی ما</Link>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-white font-iranYekan-900 ">طـبری کـیبرد</span>
        <img
          className="w-18 h-18 mt-[-15px]"
          src="/keyboard_tapuri/images/keyboard-logo.png"
          alt=""
        />
      </div>
    </header>
  );
}
