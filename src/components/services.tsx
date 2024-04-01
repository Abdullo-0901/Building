import { useTranslation } from 'react-i18next';
import '../App.css';

const Services = () => {
  const [t] = useTranslation();
  return (
    <div className="containers pb-10 max-sm:px-4 sm:px-5 md:px-20" id="enterprises">
      <h2 data-aos="fade-up" className="aos-init aos-animate py-10 text-center text-[32px] text-white">
        {t('servicestitle')}
      </h2>
      <div className="flex gap-6 max-md:flex-col">
        <div
          data-aos="fade-down-right"
          className="aos-init aos-animate flex w-3/5 items-center justify-between rounded-xl bg-[#2c3442] max-lg:w-1/2 max-md:w-full"
        >
          <p className="pl-6 text-[20px] text-white max-lg:text-[14px] max-sm:pl-4 max-sm:text-[14px] ">
            {t('servicescardtitle1')}
          </p>
          <img loading="lazy" src="/services/gold1.png" alt="gold" className="w-[180px] max-lg:w-[120px]" />
        </div>

        <div
          data-aos="fade-down-left"
          className="aos-init aos-animate flex w-2/5 items-center justify-between rounded-xl bg-[#2c3442] max-lg:w-1/2 max-md:w-full"
        >
          <p className="pl-6 text-[20px] text-white max-lg:text-[16px] max-sm:pl-4 max-sm:text-[14px]">
            {t('servicescardtitle2')}
          </p>
          <img
            loading="lazy"
            src="/services/notebook.png"
            alt="gold"
            className="w-[180px] max-lg:w-[120px]"
          />{' '}
        </div>
      </div>
      <div className="mt-6 flex gap-6 max-md:flex-col">
        <div
          data-aos="fade-up-right"
          className="aos-init flex w-2/5 items-center justify-between rounded-xl bg-[#2c3442] max-lg:w-1/2 max-md:w-full"
        >
          <p className="pl-6 text-[20px] text-white max-lg:text-[18px] max-md:text-[20px] max-sm:pl-4">
            {t('servicescardtitle3')}
          </p>
          <img
            loading="lazy"
            src="/services/settings.png"
            alt="gold"
            className="w-[180px] max-lg:w-[120px]"
          />
        </div>
        <div
          data-aos="fade-up-left"
          className="aos-init flex w-3/5 items-center justify-between rounded-xl bg-[#2c3442] max-lg:w-1/2 max-md:w-full"
        >
          <p className="pl-6 text-[20px] text-white max-lg:text-[16px] max-sm:pl-4 max-sm:text-[14px]">
            {t('servicescardtext4')}
          </p>
          <img loading="lazy" src="/services/car.png" alt="gold" className="w-[180px] max-lg:w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Services;
