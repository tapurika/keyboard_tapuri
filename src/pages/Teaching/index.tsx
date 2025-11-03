import clsx from "clsx";

import { TABARI_IR } from "@/constants/tabariWord";

const styles = {
  root: `
    wrapper px-3.5
    bg-gray-100
    text-black
    pb-10
  `,
  textSection: `
    flex flex-col gap-10
    mt-8
  `,
};

export default function Teaching() {
  return (
    <div className={styles.root}>
      <div>
        <h2 className="font-iranYekan-900 text-2xl pt-6">آموزش الفبای طبری</h2>
      </div>
      <div className={styles.textSection}>
        {TABARI_IR.map((data, i) => {
          return <AlphabetBox num={i} key={data.ir} {...data} />;
        })}
      </div>
    </div>
  );
}

function AlphabetBox({
  ir,
  la,
  ash, // ashkani
  voice,
  examples,
  num,
}: {
  ir: string;
  la: string;
  ash: string; // ashkani
  voice: string;
  num: number;
  examples: {
    text: {
      vaje: string;
      tabari: string;
      mean: string;
    };
    voice: string | null;
  }[];
}) {
  return (
    <div className="bg-white py-7 px-2.5 rounded-2xl">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <span className="font-iranYekan-500 text-[16px]">{num + 1} :</span>
          <div className="flex items-center gap-2.5 ">
            <TextBox title="ایرانی :" text={[ir]} className="bg-green-100" />
            <TextBox
              title="لاتین :"
              text={[la.toLowerCase(), la]}
              className="bg-green-100"
            />
            <TextBox title="اشکانی :" text={[ash]} className="bg-green-100" />
          </div>
        </div>

        <div className="flex items-center">
          {voice.length && (
            <audio
              src={voice}
              controls
              autoPlay={false}
              className="w-[300px] "
            />
          )}
          {/* <img
            src="/keyboard_tapuri/images/voice.svg"
            alt="voice"
            className="w-5 h-5"
            /> */}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-3">
        {examples.map((data, index) => {
          return (
            <div className="border-r-4 border-r-green-400 rounded-2xl py-2.5 mt-4">
              <TextBox
                className="border-0 text-[19px] w-full"
                title={"📍 مثال شماره‌ی"}
                text={[String(index + 1)]}
              />
              <TextBox
                className="border-0 w-full"
                title={"طبری واجه :"}
                text={[data.text.vaje]}
                textCls="text-[22px] text-green-500"
              />
              <TextBox
                className="border-0 w-full"
                title={"طبری دبیره :"}
                text={[data.text.tabari]}
                textCls="text-[22px] text-green-700 font-bold"
              />
              <TextBox
                className="border-0 w-full"
                title={"فـارسـی مـنا :"}
                text={[data.text.mean]}
                textCls="text-[22px] text-green-500"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TextBox({
  className,
  title,
  text,
  textCls,
}: {
  className?: string;
  textCls?: string;
  title: string;
  text: string[];
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 w-22 h-10 rounded-[8px] py-1.5 ps-2",
        className
      )}
    >
      <span className="font-iranYekan-500 ">{title}</span>
      <div className="flex items-center gap-1">
        {text.map((data) => (
          <span className={textCls}>{data}</span>
        ))}
      </div>
    </div>
  );
}
