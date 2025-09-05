export default function IntroductionLang() {
  return (
    <div className="mt-[180px] bg-[#1c1c1c] min-h-[600px]">
      <div className="wrapper flex flex-col gap-18 py-44 ">
        <section className="flex gap-8 ">
          <div className="w-2/3 pe-16">
            <h2 className="font-iranYekan-700 text-5xl "> زبان تپوری </h2>
            <p className="mt-9 text-[20px] leading-9 tracking-wider">
              زبان مازَنْدَرانی (کوتاه شده: مازَنی) یا زبان تَبَری(طبری) یا زبان
              تَپوری
              <strong className="text-red-600 ps-2">
                (به مازندرانی: تَوِری، مازِرونی، تاتی، گلکی، گالشی)
              </strong>
              نام یکی از زبان‌های ایرانی شمال‌غربی است که در گروه زبان‌های
              هیرکانی(کاسپین) قرار دارد و ریشه در زبان طبری کهن دارد.
              <br />
              برای نمونه‌های کهن‌تر از زبان‌های ایرانی شمال غربی می‌توان به زبان
              مادی و زبان پارتی اشاره کرد. به باور زبان‌شناسان گیلکی زبان خواهر
              مازندرانی است و نزدیکترین زبان از دید دستوری به این زبان است.
            </p>
          </div>
          <div className="w-1/3">
            <img
              className="rounded-2xl min-w-[420px]"
              src="/keyboard_tapuri/images/tapuri-mazani-tabari-lang-.jpg"
              alt="زبان تپوری - مازنی - طبری"
            />
          </div>
        </section>
        <section className="flex gap-8 items-center">
          <div className="w-1/3 pe-16">
            <img
              className="rounded-2xl min-w-[420px]"
              src="/keyboard_tapuri/images/tapuri-lang (3).jpg"
              alt="زبان تپوری - مازنی - طبری"
            />
          </div>
          <p className="w-2/3 text-[20px] leading-9 tracking-wider">
            زبان طبری در سده‌های ششم و هفتم هجری (سده یازدهم و دوازدهم میلادی)
            به جایگاه زبان ادبی دست یافته بود ولی امروزه دارای رسم‌الخط ویژه‌ای
            نیست. (ولی نزدیک به یک دهه هست دبیره ی مشرقی طبری ساخته شده)
            <br />
            روزی این زبان
            <strong className="text-red-600 ps-2">
              {" "}
              رقیب اصلی زبان فارسی دری{" "}
            </strong>
            بود و می‌رفت تا زبان رسمی ایرانیان شود و تنها بخاطر ناپایداری
            فرمانروایی‌های محلی، نبود فرمانروایی توانمند و پیدایش و چیرگی
            فرمانروایی‌های محلی در خراسان، نتوانست چیرگی خود را بپذیرند؛ چرا که
            زبان فرمانروایان بود.
          </p>
        </section>
        <section className="flex gap-8 items-center">
          <p className="w-2/3 text-[20px] leading-9 tracking-wider">
            فارسی و طبری تنها زبان‌های زنده از خانوادهٔ زبان‌های ایرانی هستند که
            آثاری با
            <strong className="text-red-600 ps-2">پیشینه هزار ساله </strong>
            دارند و به جز مازندرانی، هیچ زبان دیگری از زبان‌های ایرانی شمال غربی
            دارای ادبیات نوشته‌شده هزار ساله نیست.
            <br />
            امروزه زبان مازندرانی در بخشی بزرگی از استان مازندران گفتگو می‌شود
            که از غرب به استان گیلان، از جنوب غرب به استان قزوین، از شرق به
            قسمت‌های غربی استان گلستان، از جنوب شرقی به قسمت‌های شمالی استان
            سمنان و از جنوب به قسمت‌های شمالی استان تهران و استان البرز بسته
            می‌شود.
          </p>
          <div className="w-1/3 pe-16">
            <img
              className="rounded-2xl min-w-[420px]"
              src="/keyboard_tapuri/images/tapuri-lang.jpg"
              alt="زبان تپوری - مازنی - طبری"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
