import { useState } from "react";
import { Mobile_WORD, extraRow } from "./constants";

const styles = {
  root: `
    w-full h-screen
    flex flex-col
    bg-gray-50
    text-gray-800 font-serif font-bold 
  `,
  textarea: `
    flex-1
    p-3
    text-lg
    border-none outline-none
    resize-none
  `,
  fixButton: `
    fixed
    bottom-24 right-5
    bg-blue-600 hover:bg-blue-700 text-white
    rounded-full
    p-4
    shadow-xl transition
  `,
  kbRoot: `
  
  `,
};

export default function MobileKeyboard() {
  const [text, setText] = useState("");
  const [fixed, setFixed] = useState(false);
  const [showOptions, setShowOptions] = useState<null | string>(null);

  const handleKeyPress = (key: string) => {
    if (key === "remove") {
      setText((prev) => prev.slice(0, -1));
    } else {
      setText((prev) => prev + key);
    }
  };

  const handleExtra = (action: string) => {
    if (action === "enter") setText((prev) => prev + "\n");
    if (action === "space") setText((prev) => prev + " ");
    if (action === "half-space") setText((prev) => prev + "\u200C");
    if (action === "dot") setText((prev) => prev + ".");
    if (action === "comma") setText((prev) => prev + ",");
  };

  const handleFixButton = () => setFixed(!fixed);
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  return (
    <div className={styles.root}>
      {/* textarea */}
      <textarea
        className={styles.textarea}
        placeholder="اینجا بنویس..."
        value={text}
        onChange={handleText}
      />

      {/* floating button */}
      <button
        type="button"
        onClick={handleFixButton}
        className={styles.fixButton}
      >
        {fixed ? "📌 آزاد" : "📌 چسبیده"}
      </button>

      {/* keyboard */}
      <div
        className={`bg-gray-100 border-t p-2 transition-all duration-300 ${
          fixed ? "fixed bottom-0 left-0 w-full" : ""
        }`}
      >
        {Mobile_WORD.map((row, i) => (
          <div key={i} className="flex justify-center mb-2">
            {row.map((key, j) => (
              <div
                key={j}
                className="relative bg-white rounded-2xl shadow-md m-1 flex items-center justify-center w-12 h-14 cursor-pointer select-none active:bg-gray-200 transition"
                onClick={() =>
                  handleKeyPress(key.main === "remove" ? "remove" : key.main)
                }
                onMouseDown={() =>
                  key.side?.length > 1 && setShowOptions(`${i}-${j}`)
                }
                onMouseUp={() => setShowOptions(null)}
              >
                <span className="text-lg font-bold">
                  {key.main === "remove" ? "⌫" : key.main}
                </span>
                {key.side && key.side[0] && (
                  <span className="absolute top-1 right-1 text-xs text-gray-500">
                    {key.side[0]}
                  </span>
                )}
                {showOptions === `${i}-${j}` && key.side.length > 1 && (
                  <div className="absolute bottom-16 bg-white border rounded-lg shadow-lg p-1 flex space-x-1 animate-fadeIn">
                    {key.side.map(
                      (s, idx) =>
                        s && (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer"
                            onClick={() => handleKeyPress(s)}
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
        <div className="flex justify-center mt-2">
          {extraRow.map((btn, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md m-1 flex items-center justify-center w-16 h-14 cursor-pointer active:bg-gray-200 transition"
              onClick={() => handleExtra(btn.action)}
            >
              <span className="text-lg font-bold">{btn.main}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
