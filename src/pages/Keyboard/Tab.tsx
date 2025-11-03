import React, { useState } from "react";
import clsx from "clsx";

interface ITab {
  data: {
    title: string;
    children: React.ReactNode;
  }[];
}

const styles = {
  btnRoot: `
    flex items-center justify-center gap-1
    py-3 bg-green-400 pb-2
  `,
  btn: `
    text-white
    bg-gray-800 hover:bg-gray-900
    focus:outline-none focus:ring-4
    focus:ring-gray-300
    font-medium rounded-lg
    px-5 py-2.5 
    mb-2
    dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
    font-iranYekan-400 text-md
    cursor-pointer
  `,
  btnDeActive: `
    !bg-gray-500 !hover:bg-gray-600
    !dark:bg-gray-500 !dark:hover:bg-gray-400 !dark:focus:ring-gray-400 !dark:border-gray-400
  `,
};

export default function Tab({ data }: ITab) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className={styles.btnRoot}>
        {data.map(({ title }, index) => (
          <button
            type="button"
            className={clsx(
              index != activeIndex && styles.btnDeActive,
              styles.btn
            )}
            onClick={() => {
              if (index != activeIndex) setActiveIndex(index);
            }}
          >
            {title}
          </button>
        ))}
      </div>

      {data.map(({ children }, index) => (
        <div className={activeIndex == index ? "block" : "hidden"}>
          {children}
        </div>
      ))}
    </div>
  );
}
