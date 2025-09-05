const styles = {
  root: `
    bg-[#d6d6d6]
    text-black
    shadow-lg shadow-gray-600
    w-[30%]
    py-8 px-6
    rounded-xl
  `,
};

export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.root}>
      <h5 className="font-iranYekan-600 text-[23px] text-gray-800">{title}</h5>
      <br />
      <div className="text-gray-700 text-[18px]">{children}</div>
    </div>
  );
}
