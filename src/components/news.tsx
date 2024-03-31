import '../App.css';

const data = [];

const News = () => {
  return (
    <section className="">
      <div className="containers grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="aos-init aos-animate flex gap-6 rounded-2xl bg-white shadow-md max-sm:flex-col max-sm:gap-0"
        >
          <div className="w-1/2 max-sm:w-full">
            <img
              src="/news/news1.jpg"
              alt="img"
              className="h-full w-full rounded-l-2xl max-sm:rounded-t-2xl  max-sm:rounded-bl-none"
            />
          </div>
          <div className="w-1/2 py-4 max-sm:w-full max-sm:px-4">
            <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground scale inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-md rounded-l-full rounded-r-full border-2 bg-red-300 px-10 py-2 text-sm font-medium transition-colors hover:border-gray-500 hover:bg-white hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Yangiliklar
            </button>
            <h3 className="mt-4 text-[14px]">Kim yuritish loyiha boshqaruvchisi?</h3>
            <p className="py-2 text-[12px]">
              Discover Invest kompaniyasida bir nechta qurilish loyiha boshqaruvchilari mavjud. Bu mutaxassis,
              unga etibor qilingan qurilish sahifasini muvaffaqiyatli amalga oshirishdan mas'uldir. U butun
              jarayoni boshqaradi, loyiha hujjatlari tasdiqlanishidan boshlab rejalashtirish va bino ishga
              tushirilishiga, va ba'zida loyihani yakunlashdan so'ng post-loyiha qo'llab-quvvatlashni ham
              bajaradi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
