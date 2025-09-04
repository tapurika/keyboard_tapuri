import { FaKeyboard } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { Button } from "flowbite-react";

export default function HeroSection() {
  return (
    <div>
      {" "}
      <div className="flex justify-between gap-20 mt-32">
        <section className="w-1/2">
          <img
            // style={{ mixBlendMode: "darken" }}
            // className="w-[500px]"
            src="/keyboard_tapuri/images/tapuri-keyboard-hero-section.png"
            alt=""
          />
        </section>
        <section className="w-1/2">
          <h1 className="font-iranYekan-900 text-[70px] text-shadow-lg text-shadow-gray-500">
            کیبرد آنلاین طبری
          </h1>
          <div className="mt-8 text-[19px] text-shadow-md text-shadow-gray-500">
            <p className="w-11/12 ">
              یک صفحه‌ کلید مجازی و آنلاین است که برای تایپ کردن
              <strong className="text-red-700 text-shadow-md text-shadow-red-900">
                {" "}
                دبیره ی مشرقی{" "}
              </strong>
              طبری که مختص زبان طبری ساخته شده است.
              <br />
              این کیبردها با قرار دادن حروف و نشانه‌های ویژه این زبان در
              دسترس‌ترین مکان‌ها، امکان نوشتن صحیح و سریع را برای کاربران فراهم
              می‌کنند.
            </p>
          </div>
          <div className="flex items-center gap-5 mt-8">
            <Button className="cursor-pointer text-[18px] bg-gradient-to-br from-red-700 to-orange-500 text-white hover:bg-gradient-to-bl focus:ring-red-200 dark:focus:ring-pink-800">
              <FaKeyboard size={23} className="me-2" />
              <span>استفاده از کیبرد تپوری</span>
            </Button>
            <Button className="cursor-pointer text-[18px]" color="red" outline>
              <GiSoundWaves size={23} className="me-2.5" />
              <span>یادگیری اصوات حروف</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
