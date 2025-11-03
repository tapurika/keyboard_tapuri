import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { Mobile_WORD, extraRow } from "./constants";
import { useSetTimeout } from "@/hooks/useSetTimeout";

const styles = {
  root: `
    w-full h-[calc(100vh-150px)]
    flex flex-col
    bg-gray-50
    text-gray-800 font-serif font-bold 
  `,
  textarea: `
    font-iranYekan-400
    flex-1
    p-3
    text-lg
    outline-none
    resize-none
    placeholder-gray-400
    border-green-500 border-3
    max-h-[40%] rounded-xl mx-2
  `,
  fixButton: `
    fixed
    bottom-24 right-5
    bg-blue-600 hover:bg-blue-700 text-white
    rounded-full
    p-4
    shadow-xl transition
  `,
  copyBtn: `
    font-iranYekan-400
    flex items-center
    w-[115px]
    mx-2 my-2
    bg-gradient-to-r from-green-400 via-green-500 to-green-600
    hover:bg-gradient-to-br
    focus:ring-4 focus:outline-none focus:ring-green-300
    dark:focus:ring-green-800
    rounded-lg
    font-medium
  text-white
    text-sm
    text-center
    cursor-pointer
  `,
  copyBtnDe: `
    opacity-55
    font-iranYekan-400
    flex items-center
    w-[115px]
    mx-2 my-2
    bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600
    hover:bg-gradient-to-br
    focus:ring-4 focus:outline-none focus:ring-gray-300
    dark:focus:ring-gray-800
    rounded-lg
    font-medium
  text-white
    text-sm
    text-center
    cursor-default
  `,

  /** Keyboard */
  kbRoot: `
    flex flex-col gap-1
  bg-gray-100
    border-t border-t-gray-300
    p-2
    transition-all duration-300
  `,
  keyRoot: `
    flex gap-[4px] justify-center
  `,
  keyBox: `
    relative
    flex items-center justify-center
    w-12 h-12
    bg-white rounded-[6px] shadow-md
    cursor-pointer select-none
    active:bg-gray-200 transition
  `,
  keyMain: `
    text-lg font-bold
  `,
};

const textStorage = {
  getText: () => {
    const result = localStorage.getItem("text-area-words");
    return result === null ? "" : result;
  },
  setText: (newText: string) =>
    localStorage.setItem("text-area-words", newText),
};

export default function MobileKeyboard() {
  const { isTimeout, switchTime } = useSetTimeout(1500);
  const [text, setText] = useState("");
  const [showOptions, setShowOptions] = useState<null | string>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleClickCopy = () => {
    console.log(textStorage.getText());

    if (!isTimeout) switchTime();
  };

  const handleKeyPress = (key: string) => {
    if (key === "remove") {
      deleteLastCharacter();
    } else {
      insertTextAtCursor(key == "هـ" ? "ه" : key);
    }
  };

  const handleExtra = (action: string) => {
    if (action === "enter") insertTextAtCursor("\n");
    if (action === "space") insertTextAtCursor(" ");
    if (action === "half-space") insertTextAtCursor("\u200C");
    if (action === "dot") insertTextAtCursor(".");
    if (action === "comma") insertTextAtCursor(",");
  };

  // const handleFixButton = () => setFixed(!fixed);
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    textStorage.setText(e.target.value);
  };
  const insertTextAtCursor = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = text.substring(0, start) + char + text.substring(end);

    setText(newText);
    textStorage.setText(newText);

    // set cursor position after insert text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + char.length, start + char.length);
    }, 0);
  };

  const deleteLastCharacter = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end && start > 0) {
      // Delete single character at cursor position or last character
      const newText = text.substring(0, start - 1) + text.substring(end);
      setText(newText);
      textStorage.setText(newText);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
      }, 0);
    } else if (start !== end) {
      // Delete selected text
      const newText = text.substring(0, start) + text.substring(end);
      setText(newText);
      textStorage.setText(newText);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
      }, 0);
    }
  };

  useEffect(() => {
    const getText = textStorage.getText();
    if (getText) {
      setText(getText);
    }
  }, []);

  return (
    <div className={styles.root}>
      {/* copy button */}
      <button
        type="button"
        className={clsx(isTimeout ? styles.copyBtnDe : styles.copyBtn)}
        disabled={isTimeout}
        onClick={handleClickCopy}
      >
        <img src={"/keyboard_tapuri/images/copy.svg"} alt="copy" width={45} />
        <span>{isTimeout ? "گپی شد" : "کپی متن"}</span>
      </button>

      {/* textarea tag */}
      <textarea
        inputMode="none"
        className={styles.textarea}
        ref={textareaRef}
        placeholder="اینجا بنویس..."
        spellCheck="false"
        value={text}
        onChange={handleText}
      />

      {/* keyboard */}
      <div
        className={`${styles.kbRoot} ${
          "wrapper fixed bottom-0 left-0 right-0 w-full"
          // fixed ? "fixed bottom-0 left-0 w-full" : ""
        }`}
      >
        {Mobile_WORD.map((row, i) => (
          <div key={i} className={styles.keyRoot}>
            {row.map((key, j) => (
              <div
                key={j}
                className={styles.keyBox}
                onClick={() => {
                  handleKeyPress(key.main === "remove" ? "remove" : key.main);
                  setShowOptions(null);
                }}
                onMouseDown={() => {
                  // if (key.main === "remove") startContinuousDelete();
                  (() => key.side?.length > 0 && setShowOptions(`${i}-${j}`))();
                }}
                onMouseUp={() => {
                  // if (key.main === "remove") stopContinuousDelete();
                  // setShowOptions(null);
                }}
                onMouseLeave={() => {
                  // if (key.main === "remove") stopContinuousDelete();
                }}
                onTouchStart={() => {
                  // if (key.main === "remove") startContinuousDelete();
                }}
                onTouchEnd={() => {
                  // if (key.main === "remove") stopContinuousDelete();
                  (() => key.side?.length > 0 && setShowOptions(`${i}-${j}`))();
                }}
              >
                <span className={styles.keyMain}>
                  {/* {key.main === "remove" ? "⌫" : key.main} */}
                  {key.main === "remove" ? "⌦" : key.main}
                </span>
                {key.side && key.side[0] && (
                  <span className="absolute top-1 right-1 text-xs text-gray-500">
                    {key.side[0]}
                  </span>
                )}
                {key.bottom && (
                  <span className="absolute bottom-1 right-1 text-xs text-gray-500">
                    {key.bottom}
                  </span>
                )}
                {showOptions === `${i}-${j}` && key.side.length > 0 && (
                  <div className="absolute bottom-16 bg-white border rounded-lg shadow-lg p-1 flex space-x-1 animate-fadeIn">
                    {key.side.map(
                      (s, idx) =>
                        s && (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation(); //syntax to stop event bubbling
                              console.log("ssssss:", s);
                              // insertTextAtCursor(s);
                              handleKeyPress(s);
                              setShowOptions(null);
                            }}
                          >
                            {s}
                          </span>
                        )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* extra row */}
        <div className="w-full max-w-[569px] m-auto flex justify-center mt-1 gap-[4px]">
          {extraRow.map((btn, i) => (
            <div
              key={i}
              className={clsx(
                "bg-white rounded-[6px] shadow-md flex items-center justify-center flex-1 h-12 cursor-pointer active:bg-gray-200 transition text-lg",
                btn.cls
              )}
              onClick={() => handleExtra(btn.action)}
            >
              <span className="font-bold">{btn.main}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
