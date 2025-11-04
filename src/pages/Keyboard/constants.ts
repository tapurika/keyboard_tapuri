export const Mobile_WORD = [
  [
    {
      main: { ir: "چ", la: "C", ash: "" },
      side: { ir: [], la: [], ash: [] },
    },
    {
      main: { ir: "ج", la: "J", ash: "" },
      side: { ir: ["۹", "9"], la: ["9", "۹"], ash: [] },
    },
    {
      main: { ir: "جٰ", la: "J̈", ash: "" },
      side: { ir: ["۸", "8"], la: ["8", "۸"], ash: [] },
    },
    {
      main: { ir: "خ", la: "X", ash: "" },
      side: { ir: ["۷", "7"], la: ["7", "۷"], ash: [] },
    },
    {
      main: { ir: "هـ", la: "H", ash: "" },
      side: { ir: ["۶", "6"], la: ["6", "۶"], ash: [] },
    },
    {
      main: { ir: "غ", la: "Ғ", ash: "" },
      side: { ir: ["۵", "5", "ڠ"], la: ["5", "۵"], ash: [] },
      bottom: { ir: "ڠ", la: "" },
    },
    {
      main: { ir: "ٯ", la: "Ŋ", ash: "" },
      side: { ir: ["۴", "4"], la: ["4", "۴"], ash: [] },
    },
    {
      main: { ir: "ڧ", la: "F", ash: "" },
      side: { ir: ["۳", "3"], la: ["3", "۸"], ash: [] },
    },
    {
      main: { ir: "ق", la: "Q", ash: "" },
      side: { ir: ["۲", "2"], la: ["2", "۲"], ash: [] },
    },
    {
      main: { ir: "ە", la: "E", ash: "" },
      side: { ir: ["۱", "1", "ەٕ"], la: ["1", "۱", "Ë"], ash: [] },
      bottom: { ir: "ەٕ", la: "Ë" },
    },
    {
      main: { ir: "ۀ", la: "A", ash: "" },
      side: { ir: ["۰", "0"], la: ["0", "۰"], ash: [] },
    },
  ],
  [
    { main: { ir: "گ", la: "G", ash: "" }, side: { ir: [], la: [], ash: [] } },
    {
      main: { ir: "ک", la: "K", ash: "" },
      side: { ir: ["ݣ"], la: ["K̈"], ash: [] },
    },
    { main: { ir: "م", la: "M", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "ن", la: "N", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "ت", la: "T", ash: "" }, side: { ir: [], la: [], ash: [] } },
    {
      main: { ir: "ا", la: "Ȧ", ash: "" },
      side: { ir: ["آ"], la: ["Ä"], ash: [] },
    },
    { main: { ir: "ب", la: "B", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "ل", la: "L", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "ي", la: "I", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "س", la: "S", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "ش", la: "S̈", ash: "" }, side: { ir: [], la: [], ash: [] } },
  ],
  [
    {
      main: { ir: "remove", la: "remove", ash: "remove" },
      side: { ir: [], la: [], ash: [] },
    },
    {
      main: { ir: "پ", la: "P", ash: "" },
      side: { ir: ["ݐ"], la: ["P̈"], ash: [] },
    },
    { main: { ir: "و", la: "V", ash: "" }, side: { ir: [], la: [], ash: [] } },
    { main: { ir: "ۋ", la: "W", ash: "" }, side: { ir: [], la: [], ash: [] } },
    {
      main: { ir: "ۈ", la: "U", ash: "" },
      side: { ir: ["ۊ"], la: ["Ü"], ash: [] },
    },
    {
      main: { ir: "د", la: "D", ash: "" },
      side: { ir: ["ڌ"], la: ["D̈"], ash: [] },
    },
    { main: { ir: "ر", la: "R", ash: "" }, side: { ir: [], la: [], ash: [] } },
    {
      main: { ir: "ز", la: "Z", ash: "" },
      side: { ir: ["ژ"], la: ["Z̈"], ash: [] },
    },
    {
      main: { ir: "ې", la: "Y", ash: "" },
      side: { ir: ["ࢨ"], la: ["Ï"], ash: [] },
    },
    { main: { ir: "ئ", la: "É", ash: "" }, side: { ir: [], la: [], ash: [] } },
    {
      main: { ir: "ۇ", la: "O", ash: "" },
      side: { ir: ["ؤ"], la: ["Ꜵ"], ash: [] },
    },
  ],
];

export const extraRow = [
  { main: "↳", action: "enter", cls: "text-[25px]" },
  { main: ".", action: "dot", cls: "text-[22px] pb-1" },
  { main: "⇼", action: "half-space", cls: "text-[30px] pb-1" },
  { main: "🌐", action: "lang" },
  { main: "␣", action: "space", cls: "flex-3 text-[30px] pb-4" },
  { main: ",", action: "comma", cls: "text-[22px] pb-2" },
  { main: "?123", action: "symbols", cls: "flex-2 text-[16px]" },
];
