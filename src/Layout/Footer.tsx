import React from "react";
import { LINKS } from "./constant";
import { Link } from "react-router";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";

const styles = {
  root: `
    flex flex-col lg:flex-row
    justify-between gap-10
    mt-28 min-h-40
    py-11 pb-16
    [&>div]:flex-1
    font-iranYekan-400
  `,
  linkBox: `
    flex flex-col gap-2 lg:gap-3.5
    mt-6
  `,
};

export default function Footer() {
  return (
    <footer className="wrapper-pad bg-[#1c1c1c]">
      <div className={styles.root + " wrapper"}>
        <div>
          <div className="flex gap-6 items-center ">
            <img
              src="/keyboard_tapuri/images/tapurika-vajek.jpg"
              className="w-[130px] rounded-full"
              alt="تپوریکا"
            />
            <h6 className="flex flex-col gap-3 font-iranYekan-800 text-3xl text-[22px] ">
              <span>تپوریکا</span>
              <span>tapurika</span>
            </h6>
          </div>
          <p className="mt-8 lg:w-60">
            تپوریکا یک جنبش مردمی جهت آنلاین کردن مکتوبات مجاز تپوری میباشد که
            با آنلاین بودن در دسترس همگان قرار بگیرد.
          </p>
        </div>
        <div className="">
          <h6 className="font-bold">لینک پیج ها</h6>
          <div className={styles.linkBox}>
            {LINKS.map((data) => {
              return (
                <Link
                  className="flex items-center gap-2.5"
                  to={data.to}
                  key={data.to}
                >
                  <FaLink size={20} />
                  <span>{data.text}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="">
          <h6 className="font-bold">لینک های نویسنده</h6>
          <div className={styles.linkBox}>
            <TextBoxA
              href="https://t.me/zabAnzadmazani"
              icon={<SiTelegram size={25} />}
              text="کانال تلگرامی پیر بته مثال"
            />
            <TextBoxA
              href="https://t.me/gh_alashti"
              icon={<SiTelegram size={25} />}
              text="تلگرام جناب باقری"
            />
          </div>
        </div>
        <div className="">
          <h6 className="font-bold">لینک های تپوریکا</h6>
          <div className={styles.linkBox}>
            <TextBoxA
              href="https://github.com/tapurika"
              icon={<FaGithub size={25} />}
              text="گیتهاب تپوریکا"
            />
            <TextBoxA
              href="https://github.com/mohammadbrzbrz72"
              icon={<FaGithub size={25} />}
              text="گیتهاب محمدبرزگر (برنامه نویس)"
            />
            <TextBoxA
              href="https://t.me/tapurika"
              icon={<SiTelegram size={25} />}
              text="گروه تلگرامی تپوریکا "
            />
            <TextBoxA
              href="https://t.me/tapurika_vajek"
              icon={<SiTelegram size={25} />}
              text="کانال تپوریکا واجک"
            />
            <TextBoxA
              href="https://www.instagram.com/tapurika_vajek?igsh=bjE0MGp4ZWR2MHRp"
              icon={<FaInstagram size={25} />}
              text="پیج اینستاگرامی تپوریکا"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function TextBoxA({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener">
      <div className="flex items-center gap-2">
        {icon}
        <span>{text}</span>{" "}
      </div>
    </a>
  );
}
