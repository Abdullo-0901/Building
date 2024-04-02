import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import CountUp, { useCountUp } from 'react-countup';

const Company = () => {
  const [t] = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 3000,
  });

  return (
    <div
      id="company"
      className=" relative -z-10 -mt-3 bg-[url('/rate-image.jpg')] bg-cover bg-no-repeat object-cover"
    >
      <div className="containers pb-24 pt-10 text-white  max-sm:px-10 sm:justify-center sm:px-2 md:justify-start md:px-20">
        <h2
          data-aos="fade-up"
          className="aos-init aos-animate pb-10 text-[32px] text-white max-sm:text-center max-sm:text-[24px]"
        >
          {t('companytitle')}
        </h2>

        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" flex flex-wrap items-center gap-6 sm:justify-center md:justify-start"
        >
          <div className="flex flex-wrap items-center gap-6  sm:flex-col md:flex-row">
            <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center sm:text-center md:text-start">
              <li className="font-semibold max-sm:text-[32px] sm:text-[32px] md:text-[45px] ">
                <CountUp end={120} enableScrollSpy />+
              </li>
              <li className="text-[20px] max-sm:text-[16px]">{t('companytext1')}</li>
            </ul>
            <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center sm:text-center md:text-start">
              <li className="font-semibold max-sm:text-[32px] sm:text-[32px] md:text-[45px]">
                <CountUp end={43} enableScrollSpy />+
              </li>
              <li className="text-[20px] max-sm:text-[16px]">{t('companytext2')}</li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-6  sm:flex-col md:flex-row">
            <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center sm:text-center md:text-start">
              <li className="font-semibold max-sm:text-[32px] sm:text-[32px] md:text-[45px]">
                <CountUp end={250} enableScrollSpy />+
              </li>
              <li className="text-[20px] max-sm:text-[16px]">{t('companytext3')}</li>
            </ul>
            <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center  sm:text-center md:text-start">
              <li className="font-semibold  max-sm:text-[32px] sm:text-[32px] md:text-[45px]">
                <CountUp end={2} enableScrollSpy />+
              </li>
              <li className="text-[20px] max-sm:text-[16px]">{t('companytext4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
