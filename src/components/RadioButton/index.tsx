import React, { useState } from "react";

type IRadios = {
  name: string;
  label: string;
  checked: boolean;
}[];
interface IRadioButton {
  className?: string;
  radios: IRadios;
  getValue: (name: string) => void;
}

const styles = {
  root: `
  flex items-center mb-4
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
    text-sm font-medium
    text-gray-900 dark:text-gray-300
  `,
};

export default function RadioButton({
  radios,
  className,
  getValue,
}: IRadioButton) {
  const [checkList, setCheckList] = useState(radios);

  return (
    <div className={className}>
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
