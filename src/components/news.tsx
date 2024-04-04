import { useTranslation } from 'react-i18next';
import '../App.css';

const data = [
  {
    img: '/news/news1.jpg',
    title: 'newstilecard1',
    description: 'newsaboutcard1',
    id: 1,
  },
  {
    img: '/news/news2.jpg',
    title: 'newstilecard2',
    description: 'newsaboutcard2',
    id: 2,
  },
  {
    img: '/news/news3.jpg',
    title: 'newstilecard3',
    description: 'newsaboutcard3',
    id: 3,
  },
  {
    img: '/news/news4.jpg',
    title: 'newstilecard4',
    description: 'newsaboutcard4',
    id: 4,
  },
];

const News = () => {
  const [t] = useTranslation();

  return (
    <section className="bg-[#2c3442] py-16" id="news">
      <main className="containers">
        <h2
          data-aos="zoom-in"
          className="aos-init aos-animate mb-8 text-center text-3xl text-white max-sm:text-xl"
        >
          {t('newstitle')}
        </h2>{' '}
        <div className=" grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {data.map((news) => {
            return (
              <div
                key={news.id}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="aos-init aos-animate flex gap-6 rounded-2xl bg-white shadow-md max-sm:gap-0 sm:flex-col mmd:flex-row"
              >
                <div className="sm:w-full mmd:w-1/2">
                  <img
                    src={news.img}
                    alt="img"
                    className="h-full w-full rounded-l-2xl  sm:rounded-t-2xl sm:rounded-bl-none mmd:rounded-bl-2xl  mmd:rounded-tr-none"
                  />
                </div>
                <div className="py-4 sm:w-full sm:px-4 mmd:w-1/2 mmd:px-0">
                  <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground scale inline-flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-md rounded-l-full rounded-r-full border-2 bg-red-300 px-10 py-2 text-sm font-medium transition-colors hover:border-gray-500 hover:bg-white hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Yangiliklar
                  </button>
                  <h3 className="mt-4 sm:text-[18px]">{t(news.title)}</h3>
                  <p className="py-2 text-[15px]">{t(news.description)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default News;
