import clsx from "clsx";
import React, { useState } from "react";

type IRadios = {
  name: string;
  label: string;
  checked: boolean;
}[];
interface IRadioButton {
  title: string;
  className?: string;
  radios: IRadios;
  getValue: (name: string) => void;
}

const styles = {
  wrapper: `
    font-extrabold font-iranYekan-400
  `,
  root: `
    flex items-center
    mb-2
  `,
  input: `
    w-4 h-4
    text-blue-600
    bg-gray-100 border-gray-300
    focus:ring-blue-500 dark:focus:ring-blue-600
    dark:ring-offset-gray-800
    focus:ring-2
    dark:bg-gray-700 dark:border-gray-600
 
  `,
  label: `
    ms-2
    text-[15px] 
    text-gray-600 dark:text-gray-300
  `,
};

export default function RadioButton({
  title,
  radios,
  className,
  getValue,
}: IRadioButton) {
  const [checkList, setCheckList] = useState(radios);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <h2 className="pb-2">{title}</h2>
      {radios.map(({ name, label }, i) => (
        <div className={styles.root}>
          <input
            id={name}
            type="radio"
            value=""
            checked={checkList[i].checked}
            name={name}
            className={styles.input}
            onClick={() => {
              if (checkList[i].checked === false) {
                const value: IRadios = checkList.map((data) => ({
                  ...data,
                  checked: data.name === name,
                }));

                setCheckList([...value]);

                getValue(name);
              }
            }}
          />
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
