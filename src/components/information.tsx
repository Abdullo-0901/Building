import { useTranslation } from 'react-i18next';
import '../App.css';
export const Information = () => {
  const [t] = useTranslation();

  return (
    <div
      id="information"
      className="flex items-center  bg-[url('/person.png')] bg-cover  bg-no-repeat object-cover"
      style={{ backgroundPosition: 'top center' }}
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className=" containers  aos-init aos-animate container py-16 text-white max-md:px-12 max-md:py-8 max-sm:px-4 max-sm:py-4 sm:px-1 md:px-32"
      >
        <h2 className="text-[45px] max-sm:text-[32px]">ATAEV BAHODIR </h2>
        <h2 className="mb-12 text-[45px] max-sm:text-[32px]">{t('hometitle')}</h2>
        <p className="max-sm:w-full max-sm:text-[14px] sm:w-full md:w-1/2">{t('informationabout')}</p>
        <a href="#connect" className="mt-8 inline-block">
          <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground scale inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md rounded-l-full rounded-r-full border-2 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:border-gray-500 hover:bg-white hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            {t('homeBtn2')}
          </button>
        </a>
      </div>
    </div>
  );
};
