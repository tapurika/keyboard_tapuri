import MobileKeyboard from "./MobileLeyboard";

export default function KeyboardPage() {
  return (
    <div className="wrapper mt-16 py-20 rounded-2xl bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 ">
      {/* <div className="text-4xl !font-sans">
        {(TABARI_IR as string[]).map((str) => str + " ")}
      </div> */}
      <div>
        <MobileKeyboard />
      </div>
    </div>
  );
}
