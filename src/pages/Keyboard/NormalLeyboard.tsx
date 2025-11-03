import { useState } from "react";

import { TABARI_IR } from "@/constants/tabariWord";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export default function VirtualKeyboard() {
  const [text, setText] = useState("");

  const handleKeyClick = (char: string) => {
    setText((prev) => prev + char);
  };

  const handleDelete = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4 text-gray-800 text-[24px] font-sans font-bold">
      {" "}
      {/* Textarea (no auto-focus on typing/deleting) */}{" "}
      <label htmlFor="keyss">متن</label>
      <textarea
        id="keyss"
        className="w-full h-32 p-2 border rounded-md font-sans bg-gray-100"
        value={text}
        // readOnly
      />
      {/* Numbers */}
      <div className="grid grid-cols-10 gap-2">
        {numbers.map((num, i) => (
          <button
            type="button"
            key={i}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => handleKeyClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
      {/* Letters */}
      <div className="grid grid-cols-8 gap-2">
        {TABARI_IR.map((char, i) => (
          <button
            type="button"
            key={i}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => handleKeyClick(char.ash)}
          >
            {char.ash}
          </button>
        ))}
      </div>
      {/* Special Keys */}
      <div className="flex flex-wrap gap-2">
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => handleKeyClick(" ")}
        >
          Space
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => handleKeyClick("\u200C")}
        >
          Half-Space
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => handleKeyClick("\n")}
        >
          Enter
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => handleKeyClick("\t")}
        >
          Tab
        </button>
        <button
          className="p-2 bg-red-200 rounded hover:bg-red-300"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
