import AboutUsTab from "./AboutUsTab";
import MobileKeyboard from "./MobileLeyboard";
import Tab from "./Tab";
import Teaching from "../Teaching/index";

const TABS = [
  {
    title: "کیبرد",
    children: <MobileKeyboard />,
  },
  {
    title: "آموزش",
    children: <Teaching />,
  },
  {
    title: "درباره‌ی ما",
    children: <AboutUsTab />,
  },
  {
    title: "توضیحات",
    children: <AboutUsTab />,
  },
];

//*! Don't forget create a copy icon for

const styles = {
  box: `
    flex flex-col justify-center items-center
    pb-5 text-2xl
    bg-green-600
    font-iranYekan-900
  `,
};

export default function KeyboardPage() {
  return (
    <div className="wrapper rounded-2xl h-screen">
      <div className={styles.box}>
        <h1 className="py-3">کیبرد دبیره‌ی طبری</h1>
        <h2>تۀبەري &nbsp;&nbsp; کەليلۀتە &nbsp;&nbsp; دۀبيره</h2>
      </div>
      {/* <div className="text-4xl !font-sans">
        {(TABARI_IR as string[]).map((str) => str + " ")}
      </div> */}
      <Tab data={TABS} />
    </div>
  );
}
